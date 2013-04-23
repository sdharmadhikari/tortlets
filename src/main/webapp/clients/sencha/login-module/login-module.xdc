{
    "xdsVersion": "2.2.1",
    "frameworkVersion": "touch21",
    "internals": {
        "type": "Ext.form.Panel",
        "reference": {
            "name": "items",
            "type": "array"
        },
        "codeClass": null,
        "userConfig": {
            "listeners": [
                "[",
                "    {",
                "        ",
                "            delegate: '#loginButtonItemId',",
                "    \t\tevent: 'tap',",
                "    \t\tfn: 'onLogInButtonTap'",
                "",
                "    }",
                "",
                "",
                "]   ",
                "    "
            ],
            "loginUrl": "http://localhost:8080/tusers?find=ByUseridEqualsAndPasswordEquals",
            "itemId": "loginFormItemId",
            "designer|userClassName": "LoginForm",
            "designer|userAlias": "genericLoginForm",
            "designer|initialView": true
        },
        "configAlternates": {
            "listeners": "array"
        },
        "customConfigs": [
            {
                "group": "(Custom Properties)",
                "name": "listeners",
                "type": "string"
            },
            {
                "group": "(Custom Properties)",
                "name": "loginUrl",
                "type": "string"
            }
        ],
        "cn": [
            {
                "type": "Ext.Label",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "hidden": true,
                    "hideAnimation": "fadeOut",
                    "html": "Login failed, try again..",
                    "itemId": "signInFailedLabel",
                    "showAnimation": "fadeIn",
                    "style": "color:#990000;",
                    "designer|userClassName": "MyLabel"
                }
            },
            {
                "type": "Ext.form.FieldSet",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "designer|userClassName": "MyFieldSet",
                    "title": null
                },
                "cn": [
                    {
                        "type": "Ext.field.Text",
                        "reference": {
                            "name": "items",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "itemId": "userIdItemId",
                            "designer|userClassName": "MyTextField",
                            "label": null,
                            "name": "userid",
                            "required": true,
                            "placeHolder": "Userid.."
                        }
                    },
                    {
                        "type": "Ext.field.Password",
                        "reference": {
                            "name": "items",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "itemId": "passwordItemId",
                            "designer|userClassName": "MyPasswordField",
                            "label": null,
                            "name": "userid",
                            "required": true,
                            "placeHolder": "Password.."
                        }
                    }
                ]
            },
            {
                "type": "Ext.Button",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "itemId": "loginButtonItemId",
                    "ui": "action",
                    "designer|userClassName": "MyButton",
                    "text": "Log In"
                }
            },
            {
                "type": "basicfunction",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "designer|userClassName": "onLogInButtonTap",
                    "fn": "onLogInButtonTap",
                    "implHandler": [
                        "var me = this,",
                        "",
                        "    userIdField = me.down('#userIdItemId'),",
                        "    passwordField = me.down('#passwordItemId'),",
                        "    label = me.down('#signInFailedLabel'),",
                        "",
                        "    userid = userIdField.getValue(),",
                        "    password = passwordField.getValue();",
                        "",
                        "if(userid.length === 0 || password.length === 0) {",
                        "    me.showSignInFailedMessage('Please enter your username and password.');",
                        "    return;",
                        "}  ",
                        "",
                        "label.setHtml('');",
                        "userIdField.setValue('');",
                        "passwordField.setValue('');",
                        "",
                        "var loginUrl = me.getInitialConfig().loginUrl;",
                        "",
                        "Ext.Ajax.request({",
                        "    url: loginUrl,",
                        "    method: 'get',",
                        "    headers : { ",
                        "        Accept : 'application/json' ",
                        "    },",
                        "    params: {",
                        "        userid: userid,",
                        "        password: password",
                        "    },",
                        "    success: function (response) {        ",
                        "        var loginResponse = Ext.JSON.decode(response.responseText);",
                        "        if (loginResponse.length === 1 && loginResponse[0].userid === userid) {",
                        "            me.fireEvent('signInSuccess',loginResponse);",
                        "        } else {",
                        "            me.showSignInFailedMessage('Bad Credentials');",
                        "        }",
                        "    },",
                        "    failure: function (response) {",
                        "        me.showSignInFailedMessage('Server error. Please try again later.');",
                        "    }",
                        "});"
                    ]
                }
            },
            {
                "type": "basicfunction",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "designer|userClassName": "showSignInFailedMessage",
                    "fn": "showSignInFailedMessage",
                    "designer|params": [
                        "message"
                    ],
                    "implHandler": [
                        "var label = this.down('#signInFailedLabel');",
                        "label.setHtml(message);",
                        "label.show();"
                    ]
                }
            }
        ]
    },
    "linkedNodes": {},
    "boundStores": {},
    "boundModels": {}
}