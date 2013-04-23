/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 2.2.1.
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

});

Ext.application({
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
        'CarouselDreamPanel',
        'DreamCaraoselCard',
        'TortoiseListPanel',
        'HomeTabCardPanel',
        'TortletsList',
        'DreamListCardPanel',
        'DreamList',
        'TortoiseList',
        'AllTortletsPanel',
        'ScoreTabCardPanel',
        'MainScorePanel',
        'HelpPanel',
        'TodaysTortletList'
    ],
    controllers: [
        'HomeTabController',
        'DreamsTabController',
        'SampleOverriddenController',
        'UtilityController'
    ],
    name: 'MyApp',

    launch: function() {
        console.log('application launch');

        var currentUser = Ext.create('MyApp.model.Tuser');
        currentUser.set('id',1);
        currentUser.set('version',42);
        var userid = 'sudhir';
        currentUser.set('userid',userid);
        var password = "G10dstart!";

        var tok = userid + ':' + password;
        var hash = Base64.encode(tok);
        var authHeaderValue = "Basic " + hash;

        this.currentUser = currentUser; // Here currentUser becomes global variable to be accessed using MyApp.app.currentUser
        this.tempId = 0;
        var host;

        if(window.location.host === ''){  
            host = 'localhost:8080';    
        }else{
            host = window.location.host;
        }

        var d = new Date();
        var curr_date = d.getDate();
        var curr_month = d.getMonth() + 1; //Months are zero based
        var curr_year = d.getFullYear();
        var today = (curr_month  + "/" + curr_date + "/" + curr_year);

        //todaysTortletsStore
        var todaysTortletsStore = Ext.getStore('todaysTortletsStore');
        var proxy = todaysTortletsStore.getProxy();
        proxy.setUrl('http://' + host + '/tortlets?find=ByUseridEqualsAndCreatedOnEqualsAndCompleted&userid=' +userid + '&createdOn=' + today);
        var headers = proxy.getHeaders();
        headers.Authorization = authHeaderValue;
        todaysTortletsStore.load();

        //incompleteTortletsStore
        var incompleteTortletsStore = Ext.getStore('incompleteTortletsStore');
        proxy = incompleteTortletsStore.getProxy();
        headers = proxy.getHeaders();
        headers.Authorization = authHeaderValue;
        proxy.setUrl('http://' + host + '/tortlets?find=ByUseridEqualsAndCompleted&userid=' +userid);

        //dreamsStore
        var dreamsStore = Ext.getStore('dreamsStore');
        proxy = dreamsStore.getProxy();
        headers = proxy.getHeaders();
        headers.Authorization = authHeaderValue;
        proxy.setUrl('http://' + host + '/dreams?find=ByUseridEquals&userid=' +userid);

        dreamsStore.load();

        //tortoisesStore
        var tortoisesStore = Ext.getStore('tortoisesStore');
        proxy = tortoisesStore.getProxy();
        headers = proxy.getHeaders();
        headers.Authorization = authHeaderValue;
        proxy.setUrl('http://' + host + '/tortoises?find=ByDreamAndUseridEquals&userid=' +userid);

        ////////////////////////////////////////////////////

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




        Ext.create('MyApp.view.MainTabPanel', {fullscreen: true});
    }

});
