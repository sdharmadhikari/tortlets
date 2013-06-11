/*
 * File: app/model/Tortoise.js
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
            },
            {
                name: 'id'
            },
            {
                name: 'version',
                type: 'int'
            },
            {
                name: 'tortletsCreatedCount'
            },
            {
                name: 'tortletsDeletedCount'
            },
            {
                name: 'tortletsCompletedCount'
            }
        ],
        belongsTo: {
            model: 'MyApp.model.Dream',
            foreignKey: 'dream'
        },
        proxy: {
            type: 'rest',
            url: 'http://dummy.url',
            headers: {
                Accept: 'application/json'
            },
            appendId: false
        },
        validations: [
            {
                type: 'presence',
                field: 'title'
            }
        ]
    }
});