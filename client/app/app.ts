'use strict';

angular.module('wwqaInvAppApp', [
  'wwqaInvAppApp.auth',
  'wwqaInvAppApp.admin',
  'wwqaInvAppApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
