
'use strict';

angular.module('wwqaInvAppApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        template: '<home></home>'
      });
  });
