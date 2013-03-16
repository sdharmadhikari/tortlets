/*
 * File: app/controller/HomeTabController.js
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

Ext.define('MyApp.controller.HomeTabController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            homeTabCardPanel: 'homeTabCardPanel',
            dreamDetails: 'dreamDetails',
            tortletDetails: 'tortletDetails',
            todayTortletsList: 'todayTortletsList',
            tortletsList: 'tortletsList'
        },

        control: {
            "button[name='homePageDreamButton']": {
                tap: 'onHomePageDreamButtonTap'
            },
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
            "list": {
                itemtap: 'onTodaysTortletsListItemTap'
            }
        }
    },

    onHomePageDreamButtonTap: function(button, e, options) {
        console.log('inside onHomePageDreamButtonTap');
        this.getHomeTabCardPanel().animateActiveItem(this.getDreamDetails(), { type: 'slide'});

    },

    onTortletsListItemTap: function(dataview, index, target, record, e, options) {

        var tortletDetails = this.getTortletDetails();

        tortletDetails.setRecord(record);

        this.getHomeTabCardPanel().animateActiveItem(tortletDetails, { type: 'slide'});
    },

    onTortletsDetailsBackButtonTap: function(button, e, options) {
        this.getHomeTabCardPanel().animateActiveItem(0, { type: 'slide', direction : 'right'});
    },

    onDreamDetailBackButtonTap: function(button, e, options) {
        this.getHomeTabCardPanel().animateActiveItem(0, { type: 'slide', direction : 'right'});
    },

    onTortletDetailsSaveButtonTap: function(button, e, options) {
        var tortletDetailsForm = this.getTortletDetails();
        console.log('inside onSaveButton record id' + tortletDetailsForm.getRecord());

        /// Populate record from form. populateTortletRecordFromForm()
        var record = tortletDetailsForm.getRecord();
        var newValues = tortletDetailsForm.getValues();
        record.set('title', newValues.title);
        record.set('notes', newValues.notes);

        if(newValues.completed === 1){
            record.set('completed', newValues.completed);
        }

        //////////////////////////////////////////////
        var store = Ext.getStore("incompleteTortletsStore");
        store.sync();

        if(record.get('completed') === true){
            store.remove(record); // Change "destroy" method to GET from DELETE
            store.sync();
        }


        this.getHomeTabCardPanel().
        animateActiveItem(0,{type : 'slide', direction : 'right'});
    },

    onShowTodayListButtonTap: function(button, e, options) {
        console.log('showTodayListButton');
        var store = Ext.getStore('todaysTortletsStore');
        url = store.getProxy().getUrl();
        var d = new Date();
        var curr_date = d.getDate();
        var curr_month = d.getMonth() + 1; //Months are zero based
        var curr_year = d.getFullYear();
        var today = (curr_month  + "/" + curr_date + "/" + curr_year);
        //alert(today);
        todayUrl = url + '&createdOn=' + today;
        store.getProxy().setUrl(todayUrl);
        store.load();
        store.getProxy().setUrl(url);
        this.getTortletsList().hide();
        this.getTodayTortletsList().show();

    },

    onShowPendingListButtonTap: function(button, e, options) {
        console.log('showPendingListButton');

        var incompleteTortletsStore = Ext.getStore('incompleteTortletsStore');
        var proxy = incompleteTortletsStore.getProxy();

        Ext.getStore('incompleteTortletsStore').load();
        this.getTortletsList().show();
        this.getTodayTortletsList().hide();
    },

    onTodaysTortletsListItemTap: function(dataview, index, target, record, e, options) {
        var tortletDetails = this.getTortletDetails();

        tortletDetails.setRecord(record);

        this.getHomeTabCardPanel().animateActiveItem(tortletDetails, { type: 'slide'});
    }

});