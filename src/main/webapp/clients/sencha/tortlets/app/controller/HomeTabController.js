/*
 * File: app/controller/HomeTabController.js
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

Ext.define('MyApp.controller.HomeTabController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            homeTabCardPanel: 'homeTabCardPanel',
            tortletDetails: 'tortletDetails',
            todayTortletsList: 'todayTortletsList',
            tortletsList: 'tortletsList'
        },

        control: {
            "tortletsList": {
                itemtap: 'onTortletsListItemTap'
            },
            "button[name='tortletsDetailsBackButton']": {
                tap: 'onTortletsDetailsBackButtonTap'
            },
            "button[name='dreamDetailsBackButton']": {
                tap: 'onDreamDetailBackButtonTap'
            },
            "button[name='tortletDetailsSaveButton']": {
                tap: 'onTortletDetailsSaveButtonTap'
            },
            "button[name='showTodayListButton']": {
                tap: 'onShowTodayListButtonTap'
            },
            "button[name='showPendingListButton']": {
                tap: 'onShowPendingListButtonTap'
            },
            "todayTortletsList": {
                itemtap: 'onTodaysTortletsListItemTap'
            }
        }
    },

    onTortletsListItemTap: function(dataview, index, target, record, e, eOpts) {

        var tortletDetails = this.getTortletDetails();

        var sourceStoreId = 'incompleteTortletsStore';

        record.sourceStoreId=sourceStoreId;
        tortletDetails.setRecord(record);

        this.getHomeTabCardPanel().animateActiveItem(tortletDetails, {type : 'slide'});
    },

    onTortletsDetailsBackButtonTap: function(button, e, eOpts) {
        this.getHomeTabCardPanel().animateActiveItem(0, { type: 'slide', direction : 'right'});
    },

    onDreamDetailBackButtonTap: function(button, e, eOpts) {
        this.getHomeTabCardPanel().animateActiveItem(0, { type: 'slide', direction : 'right'});
    },

    onTortletDetailsSaveButtonTap: function(button, e, eOpts) {
        var tortletDetailsForm = this.getTortletDetails();
        console.log('inside onSaveButton record id' + tortletDetailsForm.getRecord());

        /// Populate record from form. populateTortletRecordFromForm()
        var record = tortletDetailsForm.getRecord();

        tortletDetailsForm.updateRecord(record);
        operation = {};
        operation.success = this.oldTortletSaveSuccess;
        operation.failure = this.oldTortletSaveFailure;

        if(record.dirty){

            if(record.get('completed') === true){

                eitherOneStore = Ext.getStore(record.sourceStoreId);
                eitherOneStore.removedRecordIndex = eitherOneStore.indexOf(record);
                eitherOneStore.remove(record); 

            }

            record.save(operation);
        }

        this.getHomeTabCardPanel().
        animateActiveItem(0,{type : 'slide', direction : 'right'});
    },

    onShowTodayListButtonTap: function(button, e, eOpts) {
        console.log('showTodayListButton');
        var store = Ext.getStore('todaysTortletsStore');
        url = store.getProxy().getUrl();
        var d = new Date();
        var curr_date = d.getDate();
        var curr_month = d.getMonth() + 1; //Months are zero based
        var curr_year = d.getFullYear();
        var today = (curr_month  + "/" + curr_date + "/" + curr_year);

        todayUrl = url + '&createdOn=' + today;
        store.getProxy().setUrl(todayUrl);
        store.load();
        store.getProxy().setUrl(url);
        this.getTodayTortletsList().show();

    },

    onShowPendingListButtonTap: function(button, e, eOpts) {
        console.log('showPendingListButton');

        var incompleteTortletsStore = Ext.getStore('incompleteTortletsStore');
        var proxy = incompleteTortletsStore.getProxy();

        Ext.getStore('incompleteTortletsStore').load();
        this.getTortletsList().show();
        this.getTodayTortletsList().hide();
    },

    onTodaysTortletsListItemTap: function(dataview, index, target, record, e, eOpts) {
        var tortletDetails = this.getTortletDetails();

        record.sourceStoreId = 'todaysTortletsStore';
        //alert(record.sourceStoreId);
        tortletDetails.setRecord(record);

        this.getHomeTabCardPanel().animateActiveItem(tortletDetails, { type: 'slide'});
    },

    oldTortletSaveSuccess: function(savedEntity, operation) {

        var store = Ext.getStore(savedEntity.sourceStoreId);
        store.removedIndexRecord='';

        console.log('oldTortletSaveSuccesful');


    },

    oldTortletSaveFailure: function(entityTried, operation) {

        var store = Ext.getStore(entityTried.sourceStoreId);
        if(store.removedRecordIndex !== ''){

            store.insert(store.removedRecordIndex, entityTried);
            store.removedRecordIndex='';
        }

        Ext.Msg.alert('Failure','Could not save to server,try again later',Ext.emptyFn);

    }

});