/*
 * File: app/view/TortoiseDetails.js
 *
 * This file was generated by Sencha Architect version 2.2.1.
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

Ext.define('MyApp.view.TortoiseDetails', {
    extend: 'Ext.form.Panel',
    alias: 'widget.tortoiseDetails',

    config: {
        scrollToTopOnRefresh: 'true',
        scrollable: 'vertical',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Tortoise',
                items: [
                    {
                        xtype: 'button',
                        name: 'tortoiseDetailsBackToDreamButton',
                        ui: 'back',
                        text: 'Back'
                    },
                    {
                        xtype: 'button',
                        name: 'tortoiseDetailsBackToListButton',
                        align: 'right',
                        iconCls: 'arrow_up'
                    }
                ]
            },
            {
                xtype: 'textareafield',
                height: 65,
                labelWidth: '0%',
                name: 'title',
                placeHolder: 'Enter recurring activity,its slow treading tortoise..',
                maxRows: 2
            },
            {
                xtype: 'fieldset',
                title: 'Do It On Every',
                items: [
                    {
                        xtype: 'togglefield',
                        label: 'Monday',
                        labelWidth: '40%',
                        name: 'monday'
                    },
                    {
                        xtype: 'togglefield',
                        label: 'Tuesday',
                        labelWidth: '40%',
                        name: 'tuesday'
                    },
                    {
                        xtype: 'togglefield',
                        label: 'Wednesday',
                        labelWidth: '40%',
                        name: 'wednesday'
                    },
                    {
                        xtype: 'togglefield',
                        label: 'Thursday',
                        labelWidth: '40%',
                        name: 'thursday'
                    },
                    {
                        xtype: 'togglefield',
                        label: 'Friday',
                        labelWidth: '40%',
                        name: 'friday'
                    },
                    {
                        xtype: 'togglefield',
                        label: 'Saturday',
                        labelWidth: '40%',
                        name: 'saturday'
                    },
                    {
                        xtype: 'togglefield',
                        label: 'Sunday',
                        labelWidth: '40%',
                        name: 'sunday'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'button',
                        name: 'tortoiseDetailsSaveButton',
                        ui: 'confirm',
                        text: 'Save'
                    }
                ]
            },
            {
                xtype: 'button',
                name: 'tortoiseDeleteButton',
                ui: 'decline',
                text: 'I am Done, Stop The Tortoise..'
            }
        ]
    }

});