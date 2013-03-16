/*
 * File: app/model/Dream.js
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

Ext.define('MyApp.model.Dream', {
    extend: 'Ext.data.Model',

    uses: [
        'MyApp.model.Tortoise'
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
                persist: false,
                type: 'int'
            },
            {
                name: 'userid',
                allowNull: false
            },
            {
                name: 'dreamStatus'
            },
            {
                name: 'createdOn',
                dateFormat: 'MM/dd/yyy',
                persist: false
            },
            {
                name: 'updatedOn'
            }
        ],
        hasMany: {
            model: 'MyApp.model.Tortoise'
        }
    }
});