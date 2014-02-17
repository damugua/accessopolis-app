// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('accessopolis', ['ionic', 'accessopolis.services', 'accessopolis.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // the search tab has its own child nav-view and history
    .state('tab.location-index', {
      url: '/locations',
      views: {
        'locations-tab': {
          templateUrl: 'templates/location-index.html',
          controller: 'LocationIndexCtrl'
        }
      }
    })

    .state('tab.location-detail', {
      url: '/locations/:locationId',
      views: {
        'locations-tab': {
          templateUrl: 'templates/location-detail.html',
          controller: 'LocationDetailCtrl'
        }
      }
    })

    .state('tab.adopt', {
      url: '/adopt',
      views: {
        'adopt-tab': {
          templateUrl: 'templates/adopt.html'
        }
      }
    })

  .state('tab.upload', {
      url: '/upload',
      views: {
          'upload-tab': {
              templateUrl: 'templates/upload.html',
              controller: 'UploadCtrl'
          }
      }
  })

    .state('tab.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'templates/about.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/locations');

});

