/*
 * File: app/view/DreamCaraoselCard.js
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

Ext.define('MyApp.view.DreamCaraoselCard', {
    extend: 'Ext.Panel',
    alias: 'widget.dreamCaraoselCard',

    config: {
        html: 'Dream 1',
        itemId: 'mypanel7',
        style: 'background-color:LightGreen;',
        layout: {
            pack: 'center',
            type: 'vbox'
        },
        listeners: {
            element: 'element',
            tap: function(){ var panel=this; alert(1);}
        },
        items: [
            {
                xtype: 'button',
                docked: 'bottom',
                ui: 'action-small',
                width: '10%',
                text: 'MyButton14'
            }
        ]
    }

});