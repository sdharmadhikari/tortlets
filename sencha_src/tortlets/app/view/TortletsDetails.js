/*
 * File: app/view/TortletsDetails.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
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

Ext.define('MyApp.view.TortletsDetails', {
    extend: 'Ext.form.Panel',
    alias: 'widget.tortletDetails',

    config: {
        name: 'tortletDetailsName',
        id: 'tortletsDetailsId',
        items: [
            {
                xtype: 'label',
                html: '',
                margin: 10
            },
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Tortlet',
                items: [
                    {
                        xtype: 'button',
                        name: 'tortletsDetailsBackButton',
                        ui: 'back',
                        text: 'Back'
                    },
                    {
                        xtype: 'button',
                        name: 'tortletDetailsSaveButton',
                        align: 'right',
                        text: 'Save'
                    }
                ]
            },
            {
                xtype: 'textfield',
                label: 'Title',
                name: 'title'
            },
            {
                xtype: 'textareafield',
                label: 'Notes',
                name: 'notes'
            },
            {
                xtype: 'fieldset',
                margin: 10,
                items: [
                    {
                        xtype: 'togglefield',
                        label: 'Completed',
                        name: 'completed'
                    }
                ]
            }
        ]
    }

});