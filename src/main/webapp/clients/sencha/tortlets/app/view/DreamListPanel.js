/*
 * File: app/view/DreamListPanel.js
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

Ext.define('MyApp.view.DreamListPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.dreamListPanel',

    requires: [
        'MyApp.view.DreamList'
    ],

    config: {
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Your Dreams'
            },
            {
                xtype: 'dreamList'
            }
        ]
    }

});