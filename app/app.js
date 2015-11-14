'use strict';

var myApp = angular.module('myApp', [
  'ngRoute',
  'angular-loading-bar',
  'ngAnimate',
    'ngMaterial',
    'ngMdIcons'
]).
config(['$routeProvider', 'cfpLoadingBarProvider', '$mdThemingProvider', function($routeProvider, cfpLoadingBarProvider, $mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('yellow');
        cfpLoadingBarProvider.includeSpinner = true;
    }]);