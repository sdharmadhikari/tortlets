/*
 * File: app.js
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

//@require @packageOverrides
Ext.Loader.setConfig({
    paths: {
        Ext: 'touch/src',
        MyApp: '.'
    }
});

Ext.application({

    requires: [
        'MyApp.controller.*',
        'MyApp.model.*',
        'MyApp.view.UserScoreGuageChart',
        'MyApp.store.*',
        'Ext.draw.sprite.Text',
        'Ext.ModelMgr',
        'Ext.chart.*',
        'Ext.draw.*'
    ],
    viewport: {
        layout: {
            type: 'fit'
        }
    },

    models: [
        'Tortlet',
        'Dream',
        'Tortoise',
        'Tuser'
    ],
    stores: [
        'IncompleteTortletsStore',
        'TodaysTortletsStore',
        'DreamsStore',
        'TortoisesStore'
    ],
    views: [
        'MainTabPanel',
        'HomePage',
        'TortletsDetails',
        'TortoiseDetails',
        'DreamDetails',
        'DreamListPanel',
        'TortoiseListPanel',
        'HomeTabCardPanel',
        'TortletsList',
        'DreamListCardPanel',
        'DreamList',
        'TortoiseList',
        'ScoreTabCardPanel',
        'HelpPanel',
        'TodaysTortletList',
        'LandingCardPanel',
        'loginmodule',
        'signupmodule',
        'TodaysTortletListPanel',
        'TortletListPanel',
        'TortletsListsContainerPanel',
        'UserScoreGuageChart',
        'HomePageHelpModal'
    ],
    controllers: [
        'HomeTabController',
        'DreamsTabController',
        'SampleOverriddenController',
        'UserCredentialsController',
        'UtilityController',
        'UserScoreTabController'
    ],
    name: 'MyApp',

    launch: function() {
        console.log('application launch');
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        var lastUserId = localStorage.getItem('userid');
        var userObject = JSON.parse(sessionStorage.getItem('userInfo'));

        if( userObject !== null ){
            var credentialController = MyApp.app.getController('MyApp.controller.UserCredentialsController');
            console.log('populate user resources');
            credentialController.populateUserResources(userObject);
            console.log('done populte user resoures');
            var currentUser = Ext.create('MyApp.model.Tuser');
            currentUser.set('id',userObject.id);
            currentUser.set('firstName',userObject.firstName);
            currentUser.set('lastName',userObject.lastName);
            currentUser.set('userid',userObject.userid);
            currentUser.set('version',userObject.version); 
            MyApp.app.currentUser = currentUser; // Here currentUser becomes global variable to be accessed using MyApp.app.currentUser
            MyApp.app.currentUser.tempId = 0;

            var landingCardPanel = Ext.create('MyApp.view.LandingCardPanel', {fullscreen: true});
            var mainTabPanel = credentialController.getMainTabPanel();
            landingCardPanel.setActiveItem(mainTabPanel);
        }else {
            console.log('generating landingcardpanel');
            var landingCardPanelLogin = Ext.create('MyApp.view.LandingCardPanel', {fullscreen: true});
            console.log('done generating landingcardpanel');
            var useridField = landingCardPanelLogin.down('#userIdItemId');
            useridField.setValue(lastUserId);
        }
        console.log('done application launch');

    },

    getToday: function() {
        var d = new Date();
        var curr_date = d.getDate();
        var curr_month = d.getMonth() + 1; //Months are zero based
        var curr_year = d.getFullYear();
        var today = (curr_month  + "/" + curr_date + "/" + curr_year);
        return today;
    }

});
