/*
 * File: app/controller/DreamsTabController.js
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

Ext.define('MyApp.controller.DreamsTabController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            dreamDetails: 'dreamDetails',
            tortoiseDetails: 'tortoiseDetails',
            tortoiseListPanel: 'tortoiseListPanel',
            whatsYourDreamTextField: 'textfield[name=\'whatsYourDreamTextField\']',
            mainTabPanel: 'mainTabPanel',
            dreamListCardPanel: 'dreamListCardPanel',
            dreamDeleteButton: 'button[name=\'dreamDeleteButton\']',
            dreamListPanel: 'dreamListPanel',
            tortoiseDetailsBackToListButton: 'button[name=\'tortoiseDetailsBackToListButton\']',
            tortoiseDetailsBackToDreamButton: 'button[name=\'tortoiseDetailsBackToDreamButton\']'
        },

        control: {
            "dreamList": {
                itemtap: 'onDreamListItemTap'
            },
            "button[name='dreamDetailsNextButton']": {
                tap: 'onDreamDetailsNextButtonTap'
            },
            "button[name='dreamDetailsBackButton']": {
                tap: 'onDreamDetailsBackButtonTap'
            },
            "button[name='tortoiseListStartDreamingButton']": {
                tap: 'onTortoiseListStartDreamingButtonTap'
            },
            "button[name='dreamDeleteButton']": {
                tap: 'onDreamDeleteButtonButtonTap'
            },
            "button[name='tortoiseListPanelBackButton']": {
                tap: 'onTortoiseListPanelBackButtonTap'
            },
            "tortoiseList": {
                itemtap: 'onTortoiseListItemTap'
            },
            "button[name='allTortletsPanelDreamButton']": {
                tap: 'onAllTortletsPanelDreamButtonTap'
            },
            "button[name='tortoiseListPanelAddButton']": {
                tap: 'onTortoiseListPanelAddButtonTap'
            },
            "button[name='tortoiseDetailsSaveButton']": {
                tap: 'onTortoiseDetailsSaveButtonTap'
            },
            "button[name='tortoiseDetailsBackButton']": {
                tap: 'onTortoiseDetailsBackButtonTap'
            },
            "button[name='allTortletsPanelBackButton']": {
                tap: 'onAllTortletsPanelBackButtonTap'
            },
            "button[name='tortoiseDetailsTortletsButton']": {
                tap: 'onTortoiseDetailsTortletsButtonTap'
            },
            "button[name='homePageDreamButton']": {
                tap: 'onHomeTabNewDreamButtonTap'
            },
            "button[name='tortoiseDetailsBackToListButton']": {
                tap: 'onTortoiseDetailsBackToListButtonTap'
            },
            "button[name='tortoiseDetailsBackToDreamButton']": {
                tap: 'onTortoiseDetailsBackToDreamButtonTap'
            }
        }
    },

    onDreamListItemTap: function(dataview, index, target, record, e, options) {
        var dreamDetails = this.getDreamDetails();
        dreamDetails.newStatus = 'false';
        dreamDetails.setRecord(record);
        this.getDreamDeleteButton().show();
        this.getDreamListCardPanel().animateActiveItem(dreamDetails, { type: 'slide'} );

    },

    onDreamDetailsNextButtonTap: function(button, e, options) {
        var tortoiseListPanel = this.getTortoiseListPanel();

        var dreamDetailsForm = this.getDreamDetails();
        var newValues = dreamDetailsForm.getValues();
        var dreamId = newValues.id;
        var newStatus = dreamDetailsForm.newStatus;
        var userid = MyApp.app.userid; // Accessing global variable which has been set in Application launch() function
        var utility = MyApp.app.getController('UtilityController');
        var caller = MyApp.app.getController('DreamsTabController'); // Need this so that this controller is available in callback methods. eg. 

        if(newStatus === 'true'){
            alert('newForm');
            var newDream = Ext.create('MyApp.model.Dream',{
                title : newValues.title,
                notes : newValues.notes,
                dreamColor : newValues.dreamColor,
                userid : userid
            });
            var now = new Date();
            tempDreamId = (now.getTime()).toString();
            newDream.set('id',tempDreamId);// IF u dont this, id will be posted to server as ext-record-<number>
            newDream.save(function(createdModel){
                dreamId = createdModel.get('id');
                console.log('newDream save');
                var dreamsStore = Ext.getStore('dreamsStore');
                dreamsStore.load();
                console.log('loaded dreamsStore');
                utility.loadTortoises(dreamId);
                console.log('back to newDream.save method after loadTortoises,calling animateActiveItem');

                caller.getDreamListCardPanel().animateActiveItem(tortoiseListPanel, {type : 'slide'});
                console.log('called animateActiveItem tortoiseListPanel');
            });


        }else{
            // save the dream (copy all new values)
            dreamId = newValues.id;
            console.log('saving old dream updated , old dreamId ' + dreamId);
            var record = dreamDetailsForm.getRecord();
            var newValues = dreamDetailsForm.getValues();
            record.set('title', newValues.title);
            record.set('notes', newValues.notes);
            record.save(function(model){
                console.log('inside oldDream.save');
                var dreamsStore = Ext.getStore('dreamsStore');
                dreamsStore.load();
                console.log('inside oldDream.save, after dreamStore.load'); 
                utility.loadTortoises(dreamId);
                console.log('back to OLDDream.save method after loadTortoises,calling animateActiveItem');
                caller.getDreamListCardPanel().animateActiveItem(tortoiseListPanel, {type : 'slide'});
            });

        }

    },

    onDreamDetailsBackButtonTap: function(button, e, options) {
        this.getDreamListCardPanel().animateActiveItem(0, { type : 'slide',direction : 'right'});
    },

    onTortoiseListStartDreamingButtonTap: function(button, e, options) {
        this.getDreamListCardPanel().animateActiveItem(0, {type : 'slide', direction : 'right'});
    },

    onDreamDeleteButtonButtonTap: function(button, e, options) {
        this.getDreamListCardPanel().animateActiveItem(0, { type : 'slide', direction : 'right'});
    },

    onTortoiseListPanelBackButtonTap: function(button, e, options) {
        var dreamDetails = this.getDreamDetails();
        this.getDreamListCardPanel().animateActiveItem(dreamDetails, { type : 'slide', direction : 'right'});
    },

    onTortoiseListItemTap: function(dataview, index, target, record, e, options) {
        var tortoiseDetailsForm = this.getTortoiseDetails();
        tortoiseDetailsForm.setRecord(record);
        var tortoiseDetailsBackToDreamButton = this.getTortoiseDetailsBackToDreamButton();
        tortoiseDetailsBackToDreamButton.show();
        var tortoiseDetailsBackToListButton = this.getTortoiseDetailsBackToListButton();
        tortoiseDetailsBackToListButton.hide();
        this.getDreamListCardPanel().animateActiveItem(tortoiseDetailsForm,{ type : 'slide'});
    },

    onAllTortletsPanelDreamButtonTap: function(button, e, options) {
        this.getDreamListCardPanel()
        .animateActiveItem(0,{ type : 'slide', direction : 'right'});
    },

    onTortoiseListPanelAddButtonTap: function(button, e, options) {
        var dreamListCardPanel = this.getDreamListCardPanel();
        var tortoiseDetails = this.getTortoiseDetails();
        var tortoiseDetailsBackToDreamButton 
        = this.getTortoiseDetailsBackToDreamButton();
        tortoiseDetailsBackToDreamButton.hide();
        var tortoiseDetailsBackToListButton 
        = this.getTortoiseDetailsBackToListButton();
        tortoiseDetailsBackToListButton.show();
        dreamListCardPanel.animateActiveItem(tortoiseDetails, { type : 'slide', direction : 'down'});
    },

    onTortoiseDetailsSaveButtonTap: function(button, e, options) {

        this.getDreamListCardPanel().
        animateActiveItem(2,{ type : 'slide', direction : 'up'});
    },

    onTortoiseDetailsBackButtonTap: function(button, e, options) {
        alert('tortoseDetailsBackToDream');
        var dreamListCardPanel = this.getDreamListCardPanel();
        var tortoiseListPanel = this.getTortoiseListPanel();
        dreamListCardPanel.animateActiveItem(tortoiseListPanel, {type : 'slide', direction : 'right'});
    },

    onAllTortletsPanelBackButtonTap: function(button, e, options) {
        this.getDreamListCardPanel().
        animateActiveItem( 4,{type : 'slide', direction : 'right'});
    },

    onTortoiseDetailsTortletsButtonTap: function(button, e, options) {
        this.getDreamListCardPanel().
        animateActiveItem(3, {type : 'slide'});
    },

    onHomeTabNewDreamButtonTap: function(button, e, options) {
        console.log('inside onHomePageDreamButtonTap');
        var dreamForm = this.getDreamDetails();
        var text = this.getWhatsYourDreamTextField().getValue();
        //alert(text);
        var record = Ext.create('MyApp.model.Dream');
        record.set('title', text);
        dreamForm.newStatus='true';
        dreamForm.setRecord(record);
        var mainTabPanel = this.getMainTabPanel();
        mainTabPanel.setActiveItem(1);
        var deleteButton = this.getDreamDeleteButton(); //Ext.ComponentQuery.query("button[name='dreamDeleteButton']");
        deleteButton.hide();
        this.getDreamListCardPanel().animateActiveItem(dreamForm, { type: 'slide'});

    },

    onTortoiseDetailsBackToListButtonTap: function(button, e, options) {
        var tortoiseListPanel = this.getTortoiseListPanel();
        var slideConfig =  { type : 'slide', direction : 'up'}; 
        this.getDreamListCardPanel().animateActiveItem(tortoiseListPanel,slideConfig);
    },

    onTortoiseDetailsBackToDreamButtonTap: function(button, e, options) {

    }

});