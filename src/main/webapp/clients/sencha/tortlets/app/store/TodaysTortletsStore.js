/*
 * File: app/store/TodaysTortletsStore.js
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

Ext.define('MyApp.store.TodaysTortletsStore', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.Tortlet'
    ],

    config: {
        autoLoad: true,
        autoSync: false,
        model: 'MyApp.model.Tortlet',
        storeId: 'todaysTortletsStore',
        proxy: {
            type: 'rest',
            actionMethods: {
                create: 'POST',
                read: 'GET',
                update: 'PUT',
                destroy: 'GET'
            },
            enablePagingParams: false,
            url: 'http://localhost:8080/tortlets/tortlets/json?find=ByUseridEqualsAndCompleted&userid=sudhir',
            appendId: false,
            reader: {
                type: 'json',
                useSimpleAccessors: false
            }
        }
    }
});