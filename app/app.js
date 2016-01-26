'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  //Landing page route
  $routeProvider.when('/', {
    templateUrl: 'partials/landing_page.html',
    controller: 'LandingPageController'
  });
  //Waitlist page route
  $routeProvider.when('/waitlist', {
    templateUrl: 'partials/waitlist.html',
    controller: 'WaitListController'
  });
  $routeProvider.otherwise({redirectTo: '/'});
}]);
