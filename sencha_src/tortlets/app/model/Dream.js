/*
 * File: app/model/Dream.js
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

Ext.define('MyApp.model.Dream', {
    extend: 'Ext.data.Model',

    uses: [
        'MyApp.model.Tuser'
    ],

    config: {
        fields: [
            {
                name: 'title',
                type: 'string'
            },
            {
                name: 'notes',
                type: 'string'
            },
            {
                name: 'dreamColor'
            },
            {
                name: 'latestDreamScore',
                type: 'int'
            },
            {
                allowNull: false,
                name: 'userid'
            },
            {
                name: 'status'
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
            },
            {
                name: 'createdOn'
            },
            {
                name: 'id'
            }
        ],
        proxy: {
            type: 'rest',
            url: 'http://dummy.url',
            headers: {
                Accept: 'application/json'
            },
            appendId: false,
            writer: {
                type: 'json'
            },
            reader: {
                type: 'json'
            }
        },
        validations: [
            {
                type: 'presence',
                field: 'title'
            }
        ],
        belongsTo: {
            model: 'MyApp.model.Tuser',
            foreignKey: 'tuser'
        }
    }
});