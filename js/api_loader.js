pred_graph = {
    type: 'line',
    data: {
      datasets: [{
        label: "Precio de cierre",
        lineTension: 0.3,
        backgroundColor: "rgba(78, 115, 223, 0.05)",
        borderColor: "rgba(78, 115, 223, 1)",
        borderWidth:1,
        pointRadius: 0,
        pointHitRadius: 0,
        pointBorderWidth: 0,
        data: [],
      }],
    },
    options: {
        plugins: {
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'x',
                },
                zoom: {
                    wheel: {
                        enabled: true,
                    },
                    pinch: {
                        enabled: true
                    },
                    mode: 'xy',
                }
            }
        },
        maintainAspectRatio: false,
        parsing:false,
        layout: {
            padding: {
            left: 10,
            right: 25,
            top: 25,
            bottom: 0
            }
        },
        scales: {
            xAxes: [{
            time: {
                unit: 'date'
            },
            gridLines: {
                display: false,
                drawBorder: false
            },
            ticks: {
                maxTicksLimit: 7
            }
            }],
            yAxes: [{
            ticks: {
                maxTicksLimit: 5,
                padding: 10,
                // Include a dollar sign in the ticks
                callback: function(value, index, values) {
                return '$' + number_format(value);
                }
            },
            gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
            }
            }],
        },
        legend: {
            display: false
        },
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: 'index',
            caretPadding: 10,
            callbacks: {
            label: function(tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
            }
            }
        }
    }
};
pred1_graph = {
    type: 'line',
    data: {
        datasets: [{
        label: "Precio de cierre",
        lineTension: 0.3,
        backgroundColor: "rgba(78, 115, 223, 0.05)",
        borderColor: "rgba(78, 115, 223, 1)",
        borderWidth:1,
        pointRadius: 0,
        pointHitRadius: 0,
        pointBorderWidth: 0,
        data: [],
        }],
    },
    options: {
        plugins: {
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'x',
                },
                zoom: {
                    wheel: {
                        enabled: true,
                    },
                    pinch: {
                        enabled: true
                    },
                    mode: 'xy',
                }
            }
        },
        maintainAspectRatio: false,
        parsing:false,
        layout: {
        padding: {
            left: 10,
            right: 25,
            top: 25,
            bottom: 0
        }
        },
        scales: {
        xAxes: [{
            time: {
            unit: 'date'
            },
            gridLines: {
            display: false,
            drawBorder: false
            },
            ticks: {
            maxTicksLimit: 7
            }
        }],
        yAxes: [{
            ticks: {
            maxTicksLimit: 5,
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function(value, index, values) {
                return '$' + number_format(value);
            }
            },
            gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2]
            }
        }],
        },
        legend: {
        display: false
        },
        tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        titleMarginBottom: 10,
        titleFontColor: '#6e707e',
        titleFontSize: 14,
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        intersect: false,
        mode: 'index',
        caretPadding: 10,
        callbacks: {
            label: function(tooltipItem, chart) {
            var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
            return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
            }
        }
        }
    }
};

bars_graph = {
    type: 'bar',
    data: {
      labels: [],
      datasets: [{
        label: "Relevancia",
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
      }],
    },
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
            left: 10,
            right: 25,
            top: 25,
            bottom: 0
            }
        },
        scales: {
            xAxes: [{
            time: {
                unit: 'date'
            },
            gridLines: {
                display: false,
                drawBorder: false
            },
            ticks: {
                maxTicksLimit: 7
            }
            }],
            yAxes: [{
            ticks: {
                maxTicksLimit: 5,
                padding: 10,
            },
            gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
            }
            }],
        },
        legend: {
            display: false
        },
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: 'index',
            caretPadding: 10,
        }
    }
  };

optim_graph  = {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'MSE',
        data: [],
        backgroundColor: 'rgb(255, 99, 132)'
      }],
    },
    options: {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom'
        },
      },
    },
  };

empresas = {"AC.MX":"Arca Continental, S.A.B. de C.V.",
"AEROMEX.MX":"Grupo Aeroméxico, S.A.B. de C.V.",
"AGUA.MX":"Grupo Rotoplas S.A.B. de C.V. ",
"ALFAA.MX":"Alfa, S.A.B. de C.V.",
"ALPEKA.MX":"ALPEK, S.A.B. de C.V. ",
"ALSEA.MX":"Alsea, S.A.B. de C.V. ",
"AMXL.MX":"América Móvil, S.A.B. de C.V. ",
"ARA.MX":"Consorcio ARA, S. A. B. de C. V. ",
"ASURB.MX":"Grupo Aeroportuario del Sureste, S. A. B. de C. V. ",
"AUTLANB.MX":"Compañía Minera Autlán, S.A.B. de C.V.",
"AXTELCPO.MX":"Axtel, S.A.B. de C.V. ",
"AZTECACPO.MX":"TV Azteca, S.A.B. de C.V. ",
"BAFARB.MX":"Grupo Bafar, S.A.B. de C.V.",
"BIMBOA.MX":"Grupo Bimbo, S.A.B. de C.V. ",
"BOLSAA.MX":"Bolsa Mexicana de Valores, S.A.B. de C.V.",
"CHDRAUIB.MX":"Grupo Comercial Chedraui, S.A.B. de C.V.",
"CMOCTEZ.MX":"Corporación Moctezuma, S.A.B. de C.V.",
"CULTIBAB.MX":"Organización Cultiba, S.A.B. de C.V.",
"CYDSASAA.MX":"Cydsa, S.A.B. de C.V.",
"ELEMENT.MX":"Elementia, S.A.B. de C.V. ",
"GAPB.MX":"Grupo Aeroportuario del Pacífico, S.A.B. de C.V. ",
"GCARSOA1.MX":"Grupo Carso, S.A.B. de C.V.",
"GMEXICOB.MX":"Grupo México, S.A.B. de C.V.",
"GRUMAB.MX":"Gruma, S.A.B. de C.V.",
"HCITY.MX":"Hoteles City Express, S.A.B. de C.V.",
"HERDEZ.MX":"Grupo Herdez, S.A.B. de C.V.",
"HOTEL.MX":"Grupo Hotelero Santa Fe, S.A.B. de C.V.",
"IENOVA.MX":"Infraestructura Energética Nova, S.A.B. de C.V.",
"KIMBERA.MX":"Kimberly-Clark de México, S. A. B. de C. V. ",
"KUOB.MX":"Grupo KUO, S.A.B. de C.V.",
"LABB.MX":"Genomma Lab Internacional, S.A.B. de C.V. ",
"LALAB.MX":"Grupo Lala, S.A.B. de C.V. ",
"MEDICAB.MX":"Médica Sur, S.A.B. de C.V. ",
"MEGACPO.MX":"Megacable Holdings, S. A. B. de C. V. ",
"ORBIA.MX":"Orbia Advance Corporation, S.A.B. de C.V. ",
"NEMAKA.MX":"Nemak, S. A. B. de C. V.",
"OMAB.MX":"Grupo Aeroportuario del Centro Norte, S.A.B. de C.V. ",
"PASAB.MX":"Promotora Ambiental, S.A.B. de C.V.",
"PINFRA.MX":"Promotora y Operadora de Infraestructura, S. A. B. de C. V. ",
"RLHA.MX":"RLH Properties, S.A.B. de C.V. ",
"SORIANAB.MX":"Organización Soriana, S. A. B. de C. V. ",
"SPORTS.MX":"Grupo Sports World, S.A.B. de C.V.",
"VINTE.MX":"Vinte Viviendas Integrales, S.A.B. de C.V. ",
"VITROA.MX":"Vitro, S.A.B. de C.V. ",
"GFNORTEO.MX": "Grupo Financiero Banorte, S.A.B. de C.V."};

charts = [];

var princiapl_preds = document.getElementById("principal_pred");
var bars_div = document.getElementById("principal_predict");
var optimiz_div = document.getElementById("optimization");
var secondary_preds = document.getElementById("secondary_pred");

$('#start_button').click(function (ev) {
    //console.log(ev);
    if(charts.length>0){
        charts.forEach(e => {
            e.resetZoom();
            e.destroy();
        });
        charts=[];
    }
    $('#loader_container').css('display','block');
    $('#graph_container').css('display','none');
    //console.log($('#empresa_selected').val());
    let ticker = $('#empresa_selected').val();
    $('#emp_name').html(empresas[ticker]);
    $.ajax({
        url:"http://localhost:5000/pred",
        data:{
            token:ticker
        },
        method:"POST"
    })
    .done(function (r) {
        api_json = JSON.parse(r)
        console.log(api_json);
        console.log("Se obtuvo respuesta satisfactoria");
        $('#loader_container').css('display','none');
        $('#graph_container').css('display','block');
        createPredChart(pred_graph,api_json);
        createBarsChart(bars_graph,api_json);
        createScatterChart(optim_graph,api_json);
        createSecPredChart(pred1_graph,api_json);

    })
    .fail(function (r) {
        console.log(r);
        console.log("Hubo un error");
    })
})

let zip = (a1, a2) => a1.map((x, i) => {return {x:x, y:a2[i]}}); 

function createPredChart(pred_graph,api_json) {
    train = zip(api_json.y_train.index, api_json.y_train.data.map( e =>e[0]));
    preds = zip(api_json.y_train.index, []);
    valid = zip(api_json.y_train.index, []);
    preds = preds.concat(zip(api_json.preds.index, api_json.preds.data.map( e =>e[1])));
    valid = valid.concat(zip(api_json.preds.index, api_json.preds.data.map( e =>e[0])));
    pred_graph.data.labels = api_json.y_train.index;
    pred_graph.data.labels = pred_graph.data.labels.concat(api_json.preds.index);
    //console.log(pred_graph.data.labels);
    
    //console.log(train);
    //console.log(preds);
    //console.log(valid);
    train_config = {
        label: 'Precio de cierre',
        blineTension: 0.3,
        backgroundColor: "rgba(78, 115, 223, 0.05)",
        borderColor: "rgba(78, 115, 223, 1)",
        borderWidth:1,
        data: train,
        pointRadius: 0,
        pointHitRadius: 0,
        pointBorderWidth: 0,
        order:0,
    };
    pred_config = {
        label: 'Precio de cierre',
        blineTension: 0.3,
        backgroundColor: "rgba(78, 115, 223, 0.05)",
        borderColor: "rgba(208, 47, 33, 1)",
        borderWidth:1,
        data: preds,
        pointRadius: 0,
        pointHitRadius: 0,
        pointBorderWidth: 0,
        order:1,
    };
    valid_config = {
        label: 'Validación',
        blineTension: 0.3,
        backgroundColor: "rgba(78, 115, 223, 0.05)",
        borderColor: "rgba(36, 232, 254, 1)",
        borderWidth:1,
        data: valid,
        pointRadius: 0,
        pointHitRadius: 0,
        pointBorderWidth: 0,
        order:1,
    };
    pred_graph.data.datasets = [train_config, pred_config, valid_config];
    let myLineChart = new Chart(princiapl_preds, pred_graph);
    charts.push(myLineChart);
    myLineChart.resetZoom();
}

function createBarsChart(bars_graph,api_json) {
    bars_graph.data.labels = api_json.bars.data.map(x=>x[0]);
    //console.log(bars_graph.data.labels);
    bars_graph.data.datasets[0].data = api_json.bars.data.map(x=>x[1]);
    let myLBarChart = new Chart(bars_div, bars_graph);
    charts.push(myLBarChart);
    myLBarChart.resetZoom();
}

function createScatterChart(optim_graph,api_json) {
    points = api_json.optimiz.data.map( e => {return {x:e[0], y:e[1]}});
    //console.log(points);

    optim_graph.data.datasets[0].data = points;
    let myLBarChart = new Chart(optimiz_div, optim_graph);
    charts.push(myLBarChart);
    myLBarChart.resetZoom();
}

function createSecPredChart(pred_graph,api_json) {
    train = zip(api_json.preds.index, api_json.preds.data.map( e =>e[0]));
    preds = zip(api_json.preds.index, []);
    valid = zip(api_json.preds.index, []);
    preds = preds.concat(zip(api_json.comp.index, api_json.comp.data.map( e =>e[1])));
    valid = valid.concat(zip(api_json.comp.index, api_json.comp.data.map( e =>e[0])));
    pred_graph.data.labels = api_json.preds.index;
    pred_graph.data.labels = pred_graph.data.labels.concat(api_json.comp.index);
    //console.log(pred_graph.data.labels);
    
    //console.log(train);
    //console.log(preds);
    //console.log(valid);
    train_config = {
        label: 'Precio de cierre',
        blineTension: 0.3,
        backgroundColor: "rgba(78, 115, 223, 0.05)",
        borderColor: "rgba(78, 115, 223, 1)",
        borderWidth:1,
        data: train,
        pointRadius: 0,
        pointHitRadius: 0,
        pointBorderWidth: 0,
        order:0,
      };
    pred_config = {
        label: 'Predicción',
        blineTension: 0.3,
        backgroundColor: "rgba(78, 115, 223, 0.05)",
        borderColor: "rgba(208, 47, 33, 1)",
        borderWidth:1,
        data: preds,
        pointRadius: 0,
        pointHitRadius: 0,
        pointBorderWidth: 0,
        order:1,
      };

    valid_config = {
        label: 'Validación',
        blineTension: 0.3,
        backgroundColor: "rgba(78, 115, 223, 0.05)",
        borderColor: "rgba(36, 232, 254, 1)",
        borderWidth:1,
        data: valid,
        pointRadius: 0,
        pointHitRadius: 0,
        pointBorderWidth: 0,
        order:1,
    };
    pred_graph.data.datasets = [train_config, pred_config, valid_config];
    let myLineChart = new Chart(secondary_preds, pred_graph);
    charts.push(myLineChart);    
    myLineChart.resetZoom();
}