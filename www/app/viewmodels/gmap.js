define(['knockout', 'gmaps', 'durandal/composition'], function (ko, gmaps, composition) {
    composition.addBindingHandler('googleMap', {

        init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
            var mapObj = ko.utils.unwrapObservable(valueAccessor());

            var latLng = new gmaps.LatLng(37.774107,-122.420853);
            //  ko.utils.unwrapObservable(mapObj.lat),
            //  ko.utils.unwrapObservable(mapObj.lng));

            var mapOptions = {
                center:latLng,
                zoom: 5,
                mapTypeId: gmaps.MapTypeId.ROADMAP};

            mapObj.googleMap = new gmaps.Map(element, mapOptions);

        }
    });

    return {
        displayName: 'Map',
        map:ko.observable({}),
        activate: function()
        {
            console.log('activate');
        }
    }

});



