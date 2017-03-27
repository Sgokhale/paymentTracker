
'use strict';

angular.module('wwqaInvAppApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        template: '<dashboard></dashboard>'
      });
  });
