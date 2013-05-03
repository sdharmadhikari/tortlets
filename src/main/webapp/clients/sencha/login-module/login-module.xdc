{
    "xdsVersion": "2.2.2",
    "frameworkVersion": "touch22",
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
                    "style": "color:#990000;"
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
                        "        var userObject = loginResponse[0];",
                        "        if (loginResponse.length === 1 && userObject.userid === userid) {",
                        "            userObject.plainPassword = password;",
                        "            me.fireEvent('signInSuccess',loginResponse[0]);",
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
            },
            {
                "type": "Ext.Button",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "ui": "confirm",
                    "text": "Sign Up !"
                },
                "cn": [
                    {
                        "type": "fixedfunction",
                        "reference": {
                            "name": "items",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "fn": "handler",
                            "designer|params": [
                                "button",
                                "event"
                            ],
                            "implHandler": [
                                "var loginForm = this.up('#loginFormItemId');",
                                "loginForm.fireEvent('signUpRequested');"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    "linkedNodes": {},
    "boundStores": {},
    "boundModels": {}
}