/*
 * File: app/controller/UtilityController.js
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

Ext.define('MyApp.controller.UtilityController', {
    extend: 'Ext.app.Controller',

    config: {
    },

    storeLoadCallback: function(records, operation, success) {
        //console.log(records);
        //console.log('operation.wasSuccessful() ' + operation.wasSuccessful());
        //console.log('operation.getError() '+ operation.getError());
        //console.log('operation.getResponse '+ operation.getResponse());
        //console.log('operation.getResultSet() '+ operation.getResultSet());
        //console.log('operation.hasException() '+ operation.hasException());

        Ext.Viewport.setMasked(false);

        if(operation.hasException()) {

            Ext.Msg.alert('',MyApp.app.getServerErrorMessage(),Ext.emptyFn);
            return;
        }else if(records.length === 0){

            this.removeAll(); 
            return;
        }

    }

});