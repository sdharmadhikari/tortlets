{
    "xdsVersion": "2.2.1",
    "frameworkVersion": "touch22",
    "internals": {
        "type": "Ext.Panel",
        "reference": {
            "name": "items",
            "type": "array"
        },
        "codeClass": null,
        "userConfig": {
            "itemId": "registrationCardPanelItemId",
            "designer|userClassName": "RegistrationCardPanel",
            "designer|userAlias": "registrationCardPanel",
            "designer|initialView": true,
            "layout": "card"
        },
        "cn": [
            {
                "type": "Ext.TitleBar",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "docked": "top",
                    "designer|userClassName": "MyTitleBar",
                    "title": "Sign Up !"
                }
            },
            {
                "type": "Ext.form.Panel",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "itemId": "registrationPage1",
                    "designer|userClassName": "MyFormPanel"
                },
                "cn": [
                    {
                        "type": "Ext.form.FieldSet",
                        "reference": {
                            "name": "items",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "designer|userClassName": "MyFieldSet",
                            "title": "Personal Details"
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
                                    "itemId": "firstName",
                                    "designer|userClassName": "MyTextField",
                                    "label": "First Name",
                                    "labelWidth": "37%",
                                    "name": null
                                }
                            },
                            {
                                "type": "Ext.field.Text",
                                "reference": {
                                    "name": "items",
                                    "type": "array"
                                },
                                "codeClass": null,
                                "userConfig": {
                                    "itemId": "lastName",
                                    "designer|userClassName": "MyTextField1",
                                    "label": "Last Name",
                                    "labelWidth": "37%",
                                    "name": null
                                }
                            },
                            {
                                "type": "Ext.field.Email",
                                "reference": {
                                    "name": "items",
                                    "type": "array"
                                },
                                "codeClass": null,
                                "userConfig": {
                                    "itemId": "userEmail",
                                    "designer|userClassName": "MyEmailField",
                                    "label": "Email",
                                    "labelWidth": "37%",
                                    "name": null,
                                    "placeHolder": "email@example.com"
                                }
                            },
                            {
                                "type": "Ext.field.Email",
                                "reference": {
                                    "name": "items",
                                    "type": "array"
                                },
                                "codeClass": null,
                                "userConfig": {
                                    "itemId": "confirmEmail",
                                    "designer|userClassName": "MyEmailField1",
                                    "label": "Confirm Email",
                                    "labelWidth": "37%",
                                    "name": null,
                                    "placeHolder": "email@example.com"
                                }
                            }
                        ]
                    },
                    {
                        "type": "Ext.form.FieldSet",
                        "reference": {
                            "name": "items",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "designer|userClassName": "MyFieldSet1",
                            "title": "Credentials"
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
                                    "itemId": "userid",
                                    "designer|userClassName": "MyTextField2",
                                    "label": "User Id",
                                    "labelWidth": "37%",
                                    "name": null
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
                                    "itemId": "password",
                                    "designer|userClassName": "MyPasswordField",
                                    "label": "Password",
                                    "labelWidth": "37%",
                                    "name": null
                                }
                            },
                            {
                                "type": "Ext.field.Text",
                                "reference": {
                                    "name": "items",
                                    "type": "array"
                                },
                                "codeClass": null,
                                "userConfig": {
                                    "itemId": "confirmedPassword",
                                    "designer|userClassName": "MyTextField4",
                                    "label": "Confirm",
                                    "labelWidth": "37%",
                                    "name": null
                                }
                            }
                        ]
                    },
                    {
                        "type": "Ext.form.FieldSet",
                        "reference": {
                            "name": "items",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "itemId": "myfieldset2",
                            "designer|userClassName": "MyFieldSet2",
                            "designer|displayName": "NextButtonFieldSet",
                            "title": null
                        },
                        "cn": [
                            {
                                "type": "Ext.Button",
                                "reference": {
                                    "name": "items",
                                    "type": "array"
                                },
                                "codeClass": null,
                                "userConfig": {
                                    "itemId": "signUpNextButton",
                                    "ui": "action",
                                    "designer|userClassName": "MyButton",
                                    "text": "Next"
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
                                            "designer|userClassName": "handler",
                                            "fn": "handler",
                                            "designer|params": [
                                                "button",
                                                "event"
                                            ],
                                            "implHandler": [
                                                "var registrationCardPanel = this.up('registrationCardPanel');\r",
                                                "\r",
                                                "var firstName = registrationCardPanel.down('#firstName');\r",
                                                "\r",
                                                "firstName = firstName.getValue();\r",
                                                "\r",
                                                "\r",
                                                "registrationCardPanel.animateActiveItem(1,{type:'slide', direction:'left'});"
                                            ]
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "Ext.Panel",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "html": "Registration Successful !",
                    "itemId": "registrationPage2",
                    "designer|userClassName": "MyPanel1"
                },
                "cn": [
                    {
                        "type": "Ext.Button",
                        "reference": {
                            "name": "items",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "designer|userClassName": "MyButton1",
                            "text": "Go To Sign In"
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
                                    "designer|userClassName": "handler",
                                    "fn": "handler",
                                    "designer|params": [
                                        "button",
                                        "event"
                                    ],
                                    "implHandler": [
                                        "var registrationCardPanel = this.up('registrationCardPanel');\r",
                                        "registrationCardPanel.fireEvent('signUpSuccess',button);"
                                    ]
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "linkedNodes": {},
    "boundStores": {},
    "boundModels": {}
}