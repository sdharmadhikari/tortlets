Ext.define('MyApp.controller.override.SampleOverriddenController', {
    override: 'MyApp.controller.SampleOverriddenController',
    readme : 'Can be alerted using MyApp.app.getController(SampleOverriddenController)',
    myFunction : function() {alert('myFunction will be called because this controller is overridden');}
    
});