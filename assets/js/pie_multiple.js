/* ------------------------------------------------------------------------------
 *
 *  # Echarts - Pie multiple example
 *
 *  Demo JS code for multiple pie charts [light theme]
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var EchartsPieMultipleLight = function() {


    //
    // Setup module components
    //

    // Multiple pie charts
    var _pieMultipleLightExample = function() {
        if (typeof echarts == 'undefined') {
            console.warn('Warning - echarts.min.js is not loaded.');
            return;
        }

        // Define element
        var pie_multiples_element = document.getElementById('pie_multiples');


        //
        // Charts configuration
        //

        if (pie_multiples_element) {

            // Initialize chart
            var pie_multiples = echarts.init(pie_multiples_element);
           

            //
            // Chart config
            //

            // Top text label
            var labelTop = {
                show: false,
                position: 'center',
                formatter: '{b}\n\n',
                fontSize: 50,
                rich: {
                    a: {}
                },
                emphasis: {
                    color: '#2196f3'
                }
            };

            // Background item style
            var backStyle = {
                color: '#eee',
                emphasis: {
                    color: '#eee'
                }
            };

            // Bottom text label
            var labelBottom = {
                color: '#333',
                show: true,
                fontSize: 10,
                position: 'center',
                formatter: function (params) {
                    return '\n\n' + (100 - params.value) + '%'
                },
                fontWeight: 500,
                rich: {
                    a: {}
                },
                emphasis: {
                    color: '#333'
                }
            };

            // Set inner and outer radius
            var radius = [30, 65];

            // Options
            pie_multiples.setOption({

                // Colors
                color: [
                    '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
                    '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
                    '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
                    '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
                ],

                // Global text styles
                textStyle: {
                    fontFamily: 'Roboto, Arial, Verdana, sans-serif',
                    fontSize: 13
                },
                tooltip: {
                    trigger: 'item'
                },
                // Add title
                title: {
                    text: 'OverDue',
                    subtext: 'Monthly Report',
                    left: 'center',
                    textStyle: {
                        fontSize: 16,
                        fontWeight: 500
                    },
                    subtextStyle: {
                        fontSize: 12
                    }
                },
               
                // Add legend
                legend: {
                   
                    data: ['Main Obligations', 'Payment Claim', 'Procurement and Budget Management', 'Time', 'Contracts Management'],
                    itemHeight: 8,
                    itemWidth: 8,
                    selectedMode: false,
                     bottom: '1%',
                    left: 'center'
                },

               
                // Add series
                series: [
                    {
                        type: 'pie',
                        center: ['20%', '33%'],
                        radius: radius,
                        label: {
                            position: 'outside',
                            color: '#000',
                        },
                        hoverAnimation: true,
                        data: [
                            {name: 'other', value: 40, label: labelBottom, itemStyle: backStyle},
                            {name: 'Main Obligations', value: 60, label: labelTop,}
                        ]
                    },
                    {
                        type: 'pie',
                        center: ['50%', '33%'],
                        radius: radius,
                        hoverAnimation: false,
                        data: [
                            {name: 'other', value: 56, label: labelBottom, itemStyle: backStyle},
                            { name: 'Payment Claim', value: 44, label: labelTop}
                        ]
                    },
                    {
                        type: 'pie',
                        center: ['80%', '33%'],
                        radius: radius,
                        hoverAnimation: false,
                        data: [
                            {name: 'other', value: 65, label: labelBottom, itemStyle: backStyle},
                            { name: 'Procurement and Budget Management', value: 35, label: labelTop}
                        ]
                    },
                    {
                        type: 'pie',
                        center: ['35%', '70%'],
                        radius: radius,
                        hoverAnimation: false,
                        data: [
                            {name: 'other', value: 70, label: labelBottom, itemStyle: backStyle},
                            { name: 'Time', value: 30, label: labelTop}
                        ]
                    },
                    {
                        type: 'pie',
                        center: ['65%', '70%'],
                        radius: radius,
                        hoverAnimation: false,
                        data: [
                            {name: 'other', value: 73, label: labelBottom, itemStyle: backStyle},
                            { name: 'Contracts Management', value: 27, label: labelTop}
                        ]
                    },
                    
                ]
            });
        }


        //
        // Resize charts
        //

        // Resize function
        var triggerChartResize = function() {
            pie_multiples_element && pie_multiples.resize();
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
            _pieMultipleLightExample();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    EchartsPieMultipleLight.init();
});
