'use strict';

angular.module('wwqaInvAppApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        template: '<main></main>'
      });
  });
