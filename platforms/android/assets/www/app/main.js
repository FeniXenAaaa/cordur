requirejs.config({
    paths: {
        'text': '../lib/require/text',
        'async': '../lib/require/plugins/async',
        'propertyParser': '../lib/require/plugins/propertyParser',
        'goog': '../lib/require/plugins/goog',
        'durandal': '../lib/durandal/js',
        'plugins': '../lib/durandal/js/plugins',
        'transitions': '../lib/durandal/js/transitions',
        'bootstrap': '../lib/bootstrap/js/bootstrap',
        'knockout': '../lib/knockout/knockout-2.3.0'
    }
});

define('jquery', ['../lib/jquery/jquery-1.9.1'], function () {
    return jQuery;
});

define('gmaps', ['async!http://maps.google.com/maps/api/js?sensor=false'],
    function () {
        console.log('Google maps loaded');
        return window.google.maps;
    });


define(['durandal/system', 'durandal/app', 'durandal/viewLocator'], function (system, app, viewLocator) {

    var useragent = navigator.userAgent.toLowerCase();
    if (useragent.match(/android/) || useragent.match(/iphone/) || useragent.match(/ipad/) || useragent.match('ios') || useragent.match('Windows Phone') || useragent.match('iemobile')) {
        document.addEventListener('deviceready', onDeviceReady, false);
    }
    else {
        console.log('Launched not on the device. Start!');
        onDeviceReady();
    }


    function onDeviceReady() {
        //>>excludeStart("build", true);
        system.debug(true);
        //>>excludeEnd("build");

        console.log('Device ready!');

        app.title = 'Durandal Starter Kit';

        app.configurePlugins({
            router: true,
            dialog: true,
            widget: true
        });

        app.start().then(function () {
            //Replace 'viewmodels' in the moduleId wit
            // h 'views' to locate the view.
            //Look for partial views in a 'views' folder in the root.
            viewLocator.useConvention();

            //Show the app by setting the root view model for our application with a transition.
            app.setRoot('viewmodels/shell', 'entrance');
        });
    }
});


