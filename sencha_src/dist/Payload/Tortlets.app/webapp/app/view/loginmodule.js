/*
 * File: app/view/loginmodule.js
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

Ext.define('MyApp.view.loginmodule', {
    extend: 'Ext.form.Panel',
    alias: 'widget.genericLoginForm',

    config: {
        loginUrl: '/tusers?find=ByUseridEqualsAndPasswordEquals',
        itemId: 'loginFormItemId',
        listeners: [
            {
                delegate: '#loginButtonItemId',
                event: 'tap',
                fn: 'onLogInButtonTap'
            }
        ],
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Tortlets'
            },
            {
                xtype: 'spacer',
                height: 20
            },
            {
                xtype: 'image',
                height: 101,
                src: 'static/images/tortlets-login.png'
            },
            {
                xtype: 'spacer',
                height: 10
            },
            {
                xtype: 'label',
                hidden: true,
                hideAnimation: 'fadeOut',
                html: 'Login failed, try again..',
                itemId: 'signInFailedLabel',
                showAnimation: 'fadeIn',
                style: 'color:#990000;'
            },
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'textfield',
                        itemId: 'userIdItemId',
                        name: 'userid',
                        required: true,
                        placeHolder: 'User name...'
                    },
                    {
                        xtype: 'passwordfield',
                        itemId: 'passwordItemId',
                        name: 'userid',
                        required: true,
                        placeHolder: 'Password..'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'loginButtonItemId',
                        ui: 'action',
                        text: 'Log In'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            var loginForm = this.up('#loginFormItemId');
                            loginForm.fireEvent('signUpRequested');
                        },
                        ui: 'confirm',
                        text: 'Snap Sign Up !'
                    }
                ]
            },
            {
                xtype: 'panel',
                margin: 12,
                ui: 'light',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            Ext.Msg.alert('', 'Please send email to tortlets@softrism.com for login problems and user feedback', Ext.emptyFn);
                        },
                        flex: 1,
                        docked: 'right',
                        ui: 'action-round',
                        iconAlign: 'right',
                        iconCls: 'info'
                    }
                ]
            }
        ]
    },

    onLogInButtonTap: function() {
        var me = this,

            userIdField = me.down('#userIdItemId'),
            passwordField = me.down('#passwordItemId'),
            label = me.down('#signInFailedLabel'),

            userid = userIdField.getValue(),
            plainPassword = passwordField.getValue();

        if(userid.length === 0 || plainPassword.length === 0) {
            me.showSignInFailedMessage('Please enter your username and password.');
            return;
        } 

        userid = userid.toLowerCase();

        label.setHtml('');
        userIdField.setValue('');
        passwordField.setValue('');

        var host = MyApp.app.getHost();
        var loginUrl = host + me.getInitialConfig().loginUrl;
        //me.getInitialConfig().loginUrl = loginUrl;

        Ext.Viewport.setMasked({xtype: 'loadmask'});
        Ext.Ajax.request({
            url: loginUrl,
            method: 'get',
            headers : { 
                Accept : 'application/json' 
            },
            params: {
                userid: userid,
                password: plainPassword
            },
            success: function (response) { 
                Ext.Viewport.setMasked(false);
                var loginResponse = Ext.JSON.decode(response.responseText);
                var userObject = loginResponse[0];
                if (loginResponse.length === 1 && userObject.userid === userid) {

                    userObject.plainPassword = plainPassword;

                    var tok = userid + ':' + plainPassword;
                    var hash = Base64.encode(tok);
                    var authHeaderValue = "Basic " + hash;
                    userObject.authHeaderValue = authHeaderValue ;

                    me.fireEvent('signInSuccess',userObject);
                } else {
                    me.showSignInFailedMessage('Bad Credentials');
                }
            },
            failure: function (response) {
                Ext.Viewport.setMasked(false);
                me.showSignInFailedMessage(MyApp.app.getServerErrorMessage());
            }
        });
    },

    showSignInFailedMessage: function(message) {
        var label = this.down('#signInFailedLabel');
        label.setHtml(message);
        label.show();
    }

});