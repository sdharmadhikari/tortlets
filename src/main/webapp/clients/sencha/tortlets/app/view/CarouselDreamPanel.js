/*
 * File: app/view/CarouselDreamPanel.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.CarouselDreamPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.carouselDreamPanel',

    requires: [
        'MyApp.view.DreamCaraoselCard'
    ],

    config: {
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Your Dreams !'
            },
            {
                xtype: 'carousel',
                flex: 1,
                items: [
                    {
                        xtype: 'dreamCaraoselCard'
                    },
                    {
                        xtype: 'panel',
                        html: 'I want to start my own business..',
                        style: 'background-color: LightBlue',
                        layout: {
                            type: 'fit'
                        }
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 1,
                layout: {
                    type: 'fit'
                },
                items: [
                    {
                        xtype: 'list',
                        data: [
                            {
                                string: 'workout in gym'
                            },
                            {
                                string: 'check calories intake on Fitnesspal'
                            }
                        ],
                        ui: 'round',
                        itemTpl: [
                            '<div>List Item {string}</div>'
                        ]
                    }
                ]
            }
        ]
    }

});