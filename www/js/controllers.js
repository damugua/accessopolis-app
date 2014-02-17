angular.module('accessopolis.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('LocationIndexCtrl', function($scope, LocationService) {
  $scope.locations = LocationService.all();
})


// A simple controller that shows a tapped item's data
.controller('LocationDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.locationId);
})


.controller('UploadCtrl', function($scope, $stateParams, LocationService) {
    $scope.cities = LocationService.getCities();

});
