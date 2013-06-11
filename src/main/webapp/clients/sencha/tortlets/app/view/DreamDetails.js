/*
 * File: app/view/DreamDetails.js
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

Ext.define('MyApp.view.DreamDetails', {
    extend: 'Ext.form.Panel',
    alias: 'widget.dreamDetails',

    config: {
        scrollToTopOnRefresh: 'true',
        scrollable: 'vertical',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Dream',
                items: [
                    {
                        xtype: 'button',
                        name: 'dreamDetailsBackButton',
                        ui: 'back',
                        text: 'Back'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'I dream',
                items: [
                    {
                        xtype: 'textfield',
                        height: 74,
                        name: 'title'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Bit More On This Dream',
                items: [
                    {
                        xtype: 'textareafield',
                        height: 78,
                        width: 280,
                        name: 'notes'
                    },
                    {
                        xtype: 'selectfield',
                        hidden: true,
                        label: 'Dream Color',
                        labelWidth: '40%',
                        options: [
                            {
                                text: 'White',
                                value: 'White'
                            },
                            {
                                text: 'Yellow',
                                value: 'Yellow'
                            },
                            {
                                text: 'Blue',
                                value: 'Blue'
                            },
                            {
                                text: 'Green',
                                value: 'Green'
                            },
                            {
                                text: 'Red',
                                value: 'Red'
                            },
                            
                        ]
                    }
                ]
            },
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'button',
                        name: 'dreamDetailsNextButton',
                        ui: 'action',
                        text: 'Save and Create Tortoises'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'button',
                        name: 'dreamDeleteButton',
                        ui: 'decline',
                        text: 'I am done ! (Delete)'
                    }
                ]
            },
            {
                xtype: 'hiddenfield',
                name: 'id'
            }
        ]
    }

});