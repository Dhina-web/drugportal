/* ------------------------------------------------------------------------------
 *
 *  # Echarts - Basic column example
 *
 *  Demo JS code for basic column chart [light theme]
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var EchartsColumnsBasicLight = function() {


    //
    // Setup module components
    //

    // Basic column chart
    var _columnsBasicLightExample = function() {
        if (typeof echarts == 'undefined') {
            console.warn('Warning - echarts.min.js is not loaded.');
            return;
        }

        // Define element
        var FNBudget = document.getElementById('FNBudget');
        var FNClaim = document.getElementById('FNClaim');


        //
        // Charts configuration
        // Budget Chart

        if (FNBudget) {

            // Initialize chart
            var columns_basic = echarts.init(FNBudget);


            //
            // Chart config
            //

            // Options
            columns_basic.setOption({
                title: {
                    text: "Budget V TCC",
                    left: "center",
                    textStyle: {
                        fontSize: 12
                    },

                },
                // Define colors
                color: ['#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80'],

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Chart animation duration
                animationDuration: 750,

                // Setup grid
                grid: {
                    left: 0,
                    right: 40,
                    top: 35,
                    //height: auto,
                    //width: auto,
                    bottom: 0,
                    containLabel: true
                },

                // Add legend
                legend: {
                    data: ['Budget V TCC'],
                    itemHeight: 8,
                    itemGap: 10,
                    textStyle: {
                        padding: [0, 5]
                    }
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: '#37474F',
                    padding: [5, 8],
                    textStyle: {
                        fontSize: 10,
                        fontFamily: 'Roboto, sans-serif'
                    },
                     position: function (pos, params, dom, rect, size) {
                        var obj = { top: 60 };
                        obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
                        return obj;
                    }
                },

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    data: ['ATB', 'TCC'],
                    axisLabel: {
                        color: '#333'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#eee',
                            type: 'dashed'
                        }
                    }
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value',
                    min: 240.00,
                    max: 300.00,
                    splitNumber: 20,
                    interval: 20,
                  
                    axisLabel: {
                        color: '#333',
                        formatter: '$ {value}'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: ['#eee']
                        }
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(250,250,250,0.1)', 'rgba(0,0,0,0.01)']
                        }
                    }
                }],

                // Add series
                series: [
                    {
                        name: 'Budget',
                        type: 'bar',
                        data: [250,290],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    position: 'top',
                                    textStyle: {
                                        fontWeight: 500
                                    }
                                }
                            }
                        },
                        //markLine: {
                        //    data: [{type: 'average', name: 'Average'}]
                        //}
                    },
                  
                ]
            });
        }

        //Claim Chart
        if (FNClaim) {

            // Initialize chart
            var columns_basic = echarts.init(FNClaim);


            //
            // Chart config
            //

            // Options
            columns_basic.setOption({
                title: {
                    text: "Cost V Claim",
                    left:"center",
                    textStyle: {
                        fontSize: 12
                    },

                },
                // Define colors
                color: ['#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80'],

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },

                // Chart animation duration
                animationDuration: 750,

                // Setup grid
                grid: {
                    left: 0,
                    right: 40,
                    top: 35,
                    //height: auto,
                    //width: auto,
                    bottom: 0,
                    containLabel: true
                },

                // Add legend
                legend: {
                    data: ['Claim V Cost'],
                    itemHeight: 8,
                    itemGap: 10,
                    textStyle: {
                        padding: [0, 5]
                    }
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: '#37474F',
                    padding: [5, 8],
                    textStyle: {
                        fontSize: 10,
                        fontFamily: 'Roboto, sans-serif'
                    },
                    position: function (pos, params, dom, rect, size) {
                        var obj = { top: 60 };
                        obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
                        return obj;
                    }
                },

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    data: ['Claim Date', 'Cost Date'],
                    axisLabel: {
                        color: '#333'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#eee',
                            type: 'dashed'
                        }
                    }
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value',
                    min: 20,
                    max: 40,
                    splitNumber: 5,
                    interval: 5,

                    axisLabel: {
                        color: '#333',
                        formatter: '{value} %'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: ['#eee']
                        }
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(250,250,250,0.1)', 'rgba(0,0,0,0.01)']
                        }
                    }
                }],

                // Add series
                series: [
                    {
                        name: 'Budget',
                        type: 'bar',
                        data: [30, 25],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    position: 'top',
                                    textStyle: {
                                        fontWeight: 500
                                    }
                                }
                            }
                        },
                        //markLine: {
                        //    data: [{ type: 'average', name: 'Average' }]
                        //}
                    },

                ]
            });
        }
        //
        // Resize charts
        //

        // Resize function
        var triggerChartResize = function() {
            FNBudget && FNClaim && columns_basic.resize();
        };

        // On sidebar width change
        var sidebarToggle = document.querySelectorAll('.sidebar-control');
        if (sidebarToggle) {
            sidebarToggle.forEach(function(togglers) {
                togglers.addEventListener('click', triggerChartResize);
            });
        }

        // On window resize
        var resizeCharts;
        window.addEventListener('resize', function() {
            clearTimeout(resizeCharts);
            resizeCharts = setTimeout(function () {
                triggerChartResize();
            }, 200);
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _columnsBasicLightExample();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    EchartsColumnsBasicLight.init();
});
