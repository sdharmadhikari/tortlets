/*
 * File: app/controller/UserCredentialsController.js
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

Ext.define('MyApp.controller.UserCredentialsController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            homeTabCardPanel: 'homeTabCardPanel',
            landingCardPanel: 'landingCardPanel',
            genericLoginForm: 'genericLoginForm',
            registrationCardPanel: 'registrationCardPanel',
            mainTabPanel: 'mainTabPanel',
            registrationPage1: '#registrationPage1',
            tortletsListsContainerPanel: 'tortletsListsContainerPanel',
            todaysTortletListPanel: 'todaysTortletListPanel',
            showTodayListButton: 'button[name=\'showTodayListButton\']',
            mainPageSegmentedButton: 'segmentedbutton[name=\'mainPageSegmentedButton\']'
        },

        control: {
            "panel": {
                signUpSuccess: 'onRegistrationCardPanelItemIdSignUpSuccess',
                signOut: 'onRegistrationCardPanelItemIdSignOut'
            },
            "formpanel": {
                signUpRequested: 'onLoginFormItemIdSignUpRequested',
                signInSuccess: 'onLoginFormItemIdSignInSuccess'
            },
            "button[name='userProfileButton']": {
                tap: 'onUserProfileButtonTap'
            }
        }
    },

    onRegistrationCardPanelItemIdSignUpSuccess: function(userObject) {
        var landingCardPanel = this.getLandingCardPanel();
        var mainTabPanel = this.getMainTabPanel();

        this.populateUserInfo(userObject);
        this.populateUserResources(userObject);

        landingCardPanel.animateActiveItem(mainTabPanel, { type: 'slide'});
    },

    onLoginFormItemIdSignUpRequested: function(formpanel) {
        var landingCardPanel = this.getLandingCardPanel();
        var registrationCardPanel = this.getRegistrationCardPanel();
        var signOutButton = registrationCardPanel.down('#signOutButton');
        var quickSignupForm = registrationCardPanel.down('#whatsYourNameForm');
        var userid = quickSignupForm.down('#firstNameAsUserId');
        var wordYouLike = quickSignupForm.down('#wordYouLike');

        var host = MyApp.app.getHost();
        var registrationUrl = 'http://' + host + registrationCardPanel.getInitialConfig().registrationUrl;

        registrationCardPanel.getInitialConfig().registrationUrl = registrationUrl;

        signOutButton.hide();
        userid.setValue('');
        wordYouLike.setValue('');

        registrationCardPanel.setActiveItem(0);
        landingCardPanel.animateActiveItem(registrationCardPanel, { type: 'slide'});
    },

    onLoginFormItemIdSignInSuccess: function(userObject) {
        var landingCardPanel = this.getLandingCardPanel();
        var mainTabPanel = this.getMainTabPanel();
        var homeTabCardPanel = this.getHomeTabCardPanel();
        var tortletsListsContainerPanel = this.getTortletsListsContainerPanel();
        var todaysTortletListPanel = this.getTodaysTortletListPanel();
        var mainPageSegmentedButton = this.getMainPageSegmentedButton();
        var showTodayListButton = this.getShowTodayListButton();

        this.populateUserInfo(userObject);
        this.populateUserResources(userObject);

        mainPageSegmentedButton.setPressedButtons(showTodayListButton);
        tortletsListsContainerPanel.setActiveItem(todaysTortletListPanel);
        mainTabPanel.setActiveItem(homeTabCardPanel);
        landingCardPanel.animateActiveItem(mainTabPanel, { type: 'slide'});
    },

    onUserProfileButtonTap: function(button, e, eOpts) {
        var landingCardPanel = this.getLandingCardPanel();
        var registrationCardPanel = this.getRegistrationCardPanel();
        var registrationPage1 = this.getRegistrationPage1();
        var signOutButton = registrationCardPanel.down('#signOutButton');
        var userObject = JSON.parse(sessionStorage.getItem('userInfo'));

        signOutButton.show();
        registrationPage1.getScrollable().getScroller().scrollToTop();

        registrationCardPanel.setActiveItem(registrationPage1);

        MyApp.model.Tuser.load(userObject.id, {

            success : function(record, operation) { 
                MyApp.app.currentUser = record;
                MyApp.app.getController('MyApp.controller.UserCredentialsController').populateUserSettingsForm(registrationPage1);
                landingCardPanel.animateActiveItem(registrationCardPanel, { type: 'slide'});

            },
            failure : function(record, operation) { 
                Ext.Msg.alert('','Server error,try again later');
            }

        });

    },

    onRegistrationCardPanelItemIdSignOut: function(panel) {
        var landingcardPanel = this.getLandingCardPanel();
        var useridField = landingcardPanel.down('#userIdItemId');
        var lastUserId = localStorage.getItem('userid');

        sessionStorage.setItem('userInfo', null);

        landingcardPanel.setActiveItem(0);

        useridField.setValue(lastUserId);

    },

    populateUserInfo: function(userObject) {
        var currentUser = Ext.create('MyApp.model.Tuser');
        currentUser.set('id',userObject.id);
        currentUser.set('firstName',userObject.firstName);
        currentUser.set('lastName',userObject.lastName);
        currentUser.set('userid',userObject.userid);
        currentUser.set('version',userObject.version);

        var userid = userObject.userid;
        var authHeaderValue = userObject.authHeaderValue;

        localStorage.setItem('userid',userid);
        sessionStorage.setItem('userInfo', JSON.stringify(userObject));

        MyApp.app.currentUser = currentUser; // Here currentUser becomes global variable to be accessed using MyApp.app.currentUser
        MyApp.app.currentUser.tempId = 0;

    },

    populateUserResources: function(userObject) {
        var utility = MyApp.app.getController('UtilityController');
        var storeLoadCallback = utility.storeLoadCallback;

        var userid = userObject.userid;
        var authHeaderValue = userObject.authHeaderValue;

        var today = MyApp.app.getToday();

        var host = MyApp.app.getHost();

        //todaysTortletsStore
        var todaysTortletsStore = Ext.getStore('todaysTortletsStore');
        var proxy = todaysTortletsStore.getProxy();
        var todayOrgUrl = 'http://' + host + '/tortlets?find=ByUseridEqualsAndCreatedOnEqualsAndCompleted&userid=' +userid ;
        proxy.setUrl(todayOrgUrl + '&createdOn=' + today);
        var headers = proxy.getHeaders();
        headers.Authorization = authHeaderValue;

        todaysTortletsStore.load(storeLoadCallback);
        proxy.setUrl(todayOrgUrl);

        //incompleteTortletsStore
        var incompleteTortletsStore = Ext.getStore('incompleteTortletsStore');
        proxy = incompleteTortletsStore.getProxy();
        headers = proxy.getHeaders();
        headers.Authorization = authHeaderValue;
        proxy.setUrl('http://' + host + '/tortlets?find=ByUseridEqualsAndCompleted&userid=' +userid);

        //incompleteTortletsStore.load(storeLoadCallback);

        //dreamsStore
        var dreamsStore = Ext.getStore('dreamsStore');
        proxy = dreamsStore.getProxy();
        headers = proxy.getHeaders();
        headers.Authorization = authHeaderValue;
        proxy.setUrl('http://' + host + '/dreams?find=ByUseridEquals&userid=' +userid);

        dreamsStore.load(storeLoadCallback);

        //tortoisesStore
        var tortoisesStore = Ext.getStore('tortoisesStore');
        proxy = tortoisesStore.getProxy();
        headers = proxy.getHeaders();
        headers.Authorization = authHeaderValue;
        proxy.setUrl('http://' + host + '/tortoises?find=ByDreamAndUseridEquals&userid=' +userid);

        ////////////////////////////////////////////////////

        var Tuser = Ext.ModelMgr.getModel('MyApp.model.Tuser');
        proxy = Tuser.getProxy();
        headers = proxy.getHeaders();
        headers.Authorization = authHeaderValue;
        proxy.setUrl('http://' + host + '/tusers');

        var Dream = Ext.ModelMgr.getModel('MyApp.model.Dream');
        proxy = Dream.getProxy();
        headers = proxy.getHeaders();
        headers.Authorization = authHeaderValue;
        proxy.setUrl('http://' + host + '/dreams');

        var Tortoise = Ext.ModelMgr.getModel('MyApp.model.Tortoise');
        proxy = Tortoise.getProxy();
        headers = proxy.getHeaders();
        headers.Authorization = authHeaderValue;
        proxy.setUrl('http://' + host + '/tortoises');

        var Tortlet = Ext.ModelMgr.getModel('MyApp.model.Tortlet');
        proxy = Tortlet.getProxy();
        headers = proxy.getHeaders();
        headers.Authorization = authHeaderValue;
        proxy.setUrl('http://' + host + '/tortlets');

        console.log('coming out populate user resources');
    },

    populateUserSettingsForm: function(form) {
        registrationPage1 = form;

        var firstName = registrationPage1.down('#firstName');
        var lastName = registrationPage1.down('#lastName');
        var userEmail = registrationPage1.down('#userEmail');

        var userid = registrationPage1.down('#userid');
        var password = registrationPage1.down('#password');
        var readablePassword = registrationPage1.down('#readablePassword');

        var userObject =  JSON.parse(sessionStorage.getItem('userInfo'));

        registrationPage1.userObject = userObject; // Assigning userObject to 
        // registration page because will need things like current authValue
        // while updating the user

        firstName.setValue(userObject.firstName);
        lastName.setValue(userObject.lastName);
        userEmail.setValue(userObject.userEmail);

        userid.setValue(userObject.userid);
        password.setValue(userObject.plainPassword);
        readablePassword.setValue(userObject.plainPassword);
    }

});