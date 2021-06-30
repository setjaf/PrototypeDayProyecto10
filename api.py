from flask import Flask
from flask_cors import CORS
from flask_restful import reqparse, abort, Api, Resource
import numpy as np
import pandas as pd

import yfinance as yf
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error

import os
import sys
import datetime as dt

def info(token_yf, titulo):
    ''' Función que recibe tres argumentos: un token de yahoo finance,
    la columna de interés y el título de la gráfica a realizar.
    Se retorna un dataframe con la empresa y la columna seleccionada y
    además se muestra una gráfica de la serie de tiempo'''
    
    aux = yf.Ticker(token_yf).history(period = 'max')
    data = aux.loc[:, 'Close'].interpolate(method = 'linear')
    data = pd.DataFrame(data)
    return data

def predictores(serie, n_lags, n_diffs):
    ''' Función que recibe una serie de tiempo y regresa un dataframe
    con columnas adicionales correspondientes a los lags dados y a las
    diferencias dadas'''
    
    data = serie
    for lags in n_lags:
        data[f'Lag {lags}'] = data.iloc[:,0].shift(periods = lags)
    for diffs in n_diffs:
        data[f'Diff {diffs}'] = data.iloc[:,0].diff(periods = diffs)
    data = data.dropna()
    
    return [data, n_lags, n_diffs]

def train_test_valid(data, train_pct, test_pct, val_pct):
    ''' Función que toma un dataframe de una serie de tiempo y regresa
    el conjunto particionado de acuerdo al porcentaje de train, test y
    validation para X y para y'''
    
    n = data.shape[0]
    n_train = int(n*train_pct)
    aux = n - n_train
    n_test = int((aux*test_pct)/(test_pct + val_pct))
    return [data.iloc[:n_train, 1:], data.iloc[n_train: (n_train + n_test), 1:],
            data.iloc[(n_train + n_test):, 1:], data.iloc[:n_train, 0],
            data.iloc[n_train: (n_train + n_test), 0],
            data.iloc[(n_train + n_test):, 0]]

def apply_RF(X_train, X_test, y_train, y_test, n = 500):
    rf = RandomForestRegressor(n_estimators = n)
    rf.fit(X_train, y_train)
    preds = pd.DataFrame(y_test)
    preds['Prediccion'] = rf.predict(X_test)
    
    # plt.subplot(1, 2, 1)
    # plt.plot(X_train.index, y_train, label='Train')
    # plt.plot(preds.index, preds['Close'], label='Test')
    # plt.plot(preds.index, preds['Prediccion'], label='Prediccion')

    # plt.title(f'{empresa}')
    # plt.xlabel('Fecha')
    # plt.ylabel('Precio de cierre (MXN)')
    # plt.legend()
    
    # plt.subplot(1, 2, 2)
    # sns.barplot(x = X_train.columns, y = rf.feature_importances_*100)
    # plt.title(f'{empresa}\nImportancia de los predictores')
    # plt.ylabel('% Importancia')
    # plt.xlabel('Predictores')
    # plt.show()
    return [preds, X_train.columns, rf.feature_importances_]

def optimizer(X_train, y_train, X_test, y_test, n_estimator, rand):
    mse = []
    for iters in n_estimator:
        mod = RandomForestRegressor(n_estimators = iters, random_state = rand)
        mod.fit(X_train, y_train)
        preds = mod.predict(X_test)
        mse.append(mean_squared_error(y_test, preds))
    
    # plt.scatter(n_estimator, mse)
    # plt.title('Error cuadrático medio')
    # plt.xlabel('Número de estimadores')
    # plt.ylabel('MSE')
    # plt.show()
    return [n_estimator, mse, n_estimator[mse.index(min(mse))]]

def futuro(data, n_estimator, rand, dias = 3):
    RF = RandomForestRegressor(n_estimators=n_estimator, random_state=rand)
    RF.fit(data.iloc[:, 1:], data.iloc[:,0])

    fut = pd.DataFrame(index=np.arange(dias), columns=data.columns)
    n = len(data.columns)
    
    for i in range(dias):
        if i == 0:
            fut.iloc[0, 1:] = data.iloc[-1, :(n-1)].values
            fut.iloc[0, 0] = RF.predict(fut.iloc[0, 1:].values.reshape(1,-1))[0]
        else:
            fut.iloc[i, 1:] = fut.iloc[(i-1), :(n-1)].values
            fut.iloc[i, 0] = RF.predict(fut.iloc[i, 1:].values.reshape(1,-1))[0]
    
    return fut.astype('float')


app = Flask(__name__)
api = Api(app)
CORS(app)

TODOS = {
    'todo1': {'task': 'build an API'},
    'todo2': {'task': '?????'},
    'todo3': {'task': 'profit!'},
}

parser = reqparse.RequestParser()
parser.add_argument('token')


# TodoList
# shows a list of all todos, and lets you POST to add new tasks
class TodoList(Resource):
    def get(self):
        return TODOS

    def post(self):
        args = parser.parse_args()
        data = info(args["token"], None)
        prueba_1 = data.copy()
        data_full, num_lags, num_diffs = predictores(prueba_1, [1, 2, 3, 4, 5], [1, 2, 3, 4, 5])
        X_train, X_test, X_val, y_train, y_test, y_val = train_test_valid(data_full, 0.7, 0.2, 0.1)
        preds, columns, preds_important = apply_RF(X_train, X_test, y_train, y_test)

        num_lags_imp = preds_important[:len(num_lags) + 1]
        num_lags_imp = num_lags_imp >= 0.01
        num_diffs_imp = preds_important[len(num_lags) + 1 :]
        num_diffs_imp = num_diffs_imp >= 0.01
        index_laggs = []
        index_diffs = []

        for value in range(len(num_lags_imp)):
            if num_lags_imp[value] == True:
                index_laggs.append(value)

        for value in range(len(num_diffs_imp)):
            if num_diffs_imp[value] == True:
                index_diffs.append(value)

        lags = [num_lags[i] for i in index_laggs]
        diffs = [num_diffs[i] for i in index_diffs]
        n_list, mse, n_est = optimizer(X_train, y_train, X_test, y_test, [10, 50, 100, 150, 200, 300, 500], 1)

        #%% Segunda implementación (modelo final)
        prueba_2 = data.copy()
        data_full, num_lags, num_diffs = predictores(prueba_2, lags, diffs)
        X_train, X_test, X_val = data_full.iloc[:-120, 1:], data_full.iloc[-120:-5, 1:], data_full.iloc[-5:, 1:]
        y_train, y_test, y_val = data_full.iloc[:-120, 0], data_full.iloc[-120:-5, 0], data_full.iloc[-5:, 0]
        preds, columnas, preds_important = apply_RF(X_train, X_test, y_train, y_test, n = n_est)

        aux = data_full.iloc[:-5, :]
        fin = futuro(aux, n_est, 1, len(y_val))
        fin = fin.set_index(y_val.index)
        comp = pd.DataFrame(y_val)
        comp.rename(columns={'Close': 'Validacion'}, inplace=True)
        comp['Prediccion'] = fin['Close']

        # sns.lineplot(data = comp)
        # plt.title(f'{empresa}')
        # plt.xlabel('Fecha')
        # plt.ylabel('Precio de cierre (MXN)')
        # plt.legend()
        # plt.show()

        y_train = y_train.rename('Close').to_frame()
        y_train.index = y_train.index.astype(str)
        y_train_json = y_train.to_json( orient='split')

        preds.index = preds.index.astype(str)
        preds_json = preds.to_json( orient='split')

        bars = pd.DataFrame(columnas, columns=['Predictores'])
        bars['Importancia del predictor'] = preds_important
        bars_json = bars.to_json(orient='split')
        
        comp.index = comp.index.astype(str)
        comp_json = comp.to_json(orient='split')

        optimiz = pd.DataFrame(n_list, columns=['# de Estimadores'])
        optimiz['MSE'] = mse
        optimiz_json=optimiz.to_json(orient='split')

        json_full = f'{{"y_train":{y_train_json},"preds":{preds_json},"bars":{bars_json},"comp":{comp_json},"optimiz":{optimiz_json}}}'
        json_full = json_full.replace("\\","")
        return json_full, 201

##
## Actually setup the Api resource routing here
##
api.add_resource(TodoList, '/pred')


if __name__ == '__main__':
    app.run(debug=True)