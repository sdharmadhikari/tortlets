/*
 * File: app/view/TortoiseListPanel.js
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

Ext.define('MyApp.view.TortoiseListPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.tortoiseListPanel',

    requires: [
        'MyApp.view.TortoiseList'
    ],

    config: {
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Tortoises',
                items: [
                    {
                        xtype: 'button',
                        name: 'tortoiseListPanelBackButton',
                        ui: 'back',
                        text: 'Back'
                    },
                    {
                        xtype: 'button',
                        name: 'tortoiseListPanelAddButton',
                        align: 'right',
                        iconCls: 'add',
                        text: ''
                    }
                ]
            },
            {
                xtype: 'tortoiseList',
                flex: 10
            },
            {
                xtype: 'button',
                name: 'tortoiseListBackToDreamButton',
                itemId: 'mybutton2',
                ui: 'confirm',
                text: 'Back To Dreams'
            }
        ]
    }

});