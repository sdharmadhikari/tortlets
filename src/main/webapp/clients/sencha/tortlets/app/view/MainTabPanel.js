/*
 * File: app/view/MainTabPanel.js
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

Ext.define('MyApp.view.MainTabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.mainTabPanel',

    requires: [
        'MyApp.view.HomeTabCardPanel',
        'MyApp.view.DreamListCardPanel',
        'MyApp.view.ScoreTabCardPanel',
        'MyApp.view.HelpPanel'
    ],

    config: {
        items: [
            {
                xtype: 'homeTabCardPanel',
                title: 'Home',
                iconCls: 'home'
            },
            {
                xtype: 'dreamListCardPanel',
                title: 'Dreams',
                iconCls: 'star'
            },
            {
                xtype: 'scoreTabCardPanel',
                title: 'Your Score',
                iconCls: 'user'
            },
            {
                xtype: 'helpPanel',
                title: 'Help',
                iconCls: 'info'
            }
        ],
        tabBar: {
            docked: 'bottom'
        },
        listeners: [
            {
                fn: 'onTabpanelActiveItemChange',
                event: 'activeitemchange'
            }
        ]
    },

    onTabpanelActiveItemChange: function(container, value, oldValue, eOpts) {
        var utility = MyApp.app.getController('UtilityController');
        var storeLoadCallBack = utility.storeLoadCallBack;

        if(value.xtype === 'dreamListCardPanel'){
            var dreamsStore = Ext.getStore('dreamsStore');
            dreamsStore.load(storeLoadCallBack);
        }else if(value.xtype === 'homeTabCardPanel'){
            var tortletsStore = Ext.getStore('incompleteTortletsStore');
            tortletsStore.load(storeLoadCallBack);
            var todaysTortletsStore = Ext.getStore('todaysTortletsStore');
            var todayOrgUrl = todaysTortletsStore.getProxy().getUrl();
            var today = MyApp.app.getToday();
            var todayUrl = todayOrgUrl + '&createdOn=' + today;
            todaysTortletsStore.getProxy().setUrl(todayUrl);
            todaysTortletsStore.load(storeLoadCallBack);
            todaysTortletsStore.getProxy().setUrl(todayOrgUrl);

        }else if(value.xtype === 'scoreTabCardPanel') {

            MyApp.model.Tuser.load(MyApp.app.currentUser.get('id'), {
                scope: this,
                failure: function(record, operation) {
                    //do something if the load failed
                },
                success: function(record, operation) {
                    MyApp.app.currentUser = record;
                    var score =  MyApp.app.currentUser.get('latestDreamScore');
                    var userScoreTabController = MyApp.app.getController('UserScoreTabController');
                    var scoreTabCardPanel = userScoreTabController.getScoreTabCardPanel();
                    var userScoreGuageChart = userScoreTabController.getUserScoreGuageChart();
                    userScoreGuageChart.getSeries()[0].setValue(score);

                    /////////////////////////////////////////////////


                    var scoreTextOnChart = Ext.create('Ext.draw.sprite.Text', {
                        type : 'text',
                        text : 'Tortlets Score :' + score + '%',
                        font : 'bold 20px Arial',
                        x: 1,
                        y: 20
                    });

                    userScoreGuageChart.getSurface().removeAll();
                    userScoreGuageChart.getSurface().add(scoreTextOnChart);
                    scoreTextOnChart.show(true);


                    /////////////////////////////////////////////////            

                    scoreTabCardPanel.add(userScoreGuageChart);// I believe add
                    // is needed to repaint the gauge.

                },
                callback: function(record, operation) {
                    //do something whether the load succeeded or failed
                }
            });


        }
    }

});