/*
 * File: app/model/Tortoise.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
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

Ext.define('MyApp.model.Tortoise', {
    extend: 'Ext.data.Model',

    uses: [
        'MyApp.model.Dream'
    ],

    config: {
        fields: [
            {
                name: 'title'
            },
            {
                name: 'notes'
            },
            {
                name: 'startDate'
            },
            {
                name: 'endDate'
            },
            {
                name: 'latestTortoiseScore',
                type: 'int'
            },
            {
                name: 'createdOn'
            },
            {
                name: 'monday',
                type: 'boolean'
            },
            {
                name: 'tuesday',
                type: 'boolean'
            },
            {
                name: 'wednesday',
                type: 'boolean'
            },
            {
                name: 'thursday',
                type: 'boolean'
            },
            {
                name: 'friday',
                type: 'boolean'
            },
            {
                name: 'saturday',
                type: 'boolean'
            },
            {
                name: 'sunday',
                type: 'boolean'
            },
            {
                name: 'duration'
            },
            {
                name: 'userid'
            }
        ],
        hasOne: {
            model: 'MyApp.model.Dream'
        }
    }
});