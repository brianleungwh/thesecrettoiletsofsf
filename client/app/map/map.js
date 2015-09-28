angular.module('gotta-go.map', [])

.controller('MapController', function ($scope, uiGmapIsReady) {
  // TODO: Check to see if browser supports geolocation
  navigator.geolocation.getCurrentPosition(function (position) {
    $scope.location = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    $scope.map = {
      center: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      },
      zoom: 16
    };

    uiGmapIsReady.promise().then(function (instances) {
      var map = instances[0].map;

      var marker = new MarkerWithLabel({
        position: $scope.location,
        icon: ' ',
        map: map,
        labelContent: '<i class="material-icons" style="color: #4285F4;">radio_button_checked</i>'
      });
    });

    $scope.toilets = [
      {
        id: 0,
        coords: {
          latitude: 37.7827097,
          longitude: -122.4080675
        }
      },
      {
        id: 1,
        coords: {
          latitude: 37.7847097,
          longitude: -122.4080675
        }
      },
    ];
  });
});
