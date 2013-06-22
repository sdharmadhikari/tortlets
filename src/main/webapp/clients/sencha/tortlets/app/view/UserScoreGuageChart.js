/*
 * File: app/view/UserScoreGuageChart.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.UserScoreGuageChart', {
    extend: 'Ext.chart.SpaceFillingChart',
    alias: 'widget.userScoreGuageChart',

    config: {
        colors: [
            '#115fa6',
            '#94ae0a',
            '#a61120',
            '#ff8809',
            '#ffd13e',
            '#a61187',
            '#24ad9a',
            '#7c7474',
            '#a66111'
        ],
        series: [
            {
                type: 'gauge',
                totalAngle: 3.141592653589793,
                needle: true,
                sectors: [
                    {
                        end: 25,
                        label: 'Forgot Dreams?',
                        color: 'red'
                    },
                    {
                        end: 50,
                        label: 'Average',
                        color: 'yellow'
                    },
                    {
                        end: 75,
                        label: 'Good',
                        color: 'lightgreen'
                    },
                    {
                        end: 100,
                        label: 'Great!',
                        color: 'green'
                    }
                ],
                value: 10
            }
        ],
        listeners: [
            {
                fn: 'onSpacefillingPainted',
                event: 'painted'
            }
        ]
    },

    onSpacefillingPainted: function(element, eOpts) {
        // wanted to set series.setConfig( { sectors : [ ] }; to show zones.

    }

});