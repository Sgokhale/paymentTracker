
'use strict';

angular.module('wwqaInvAppApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('invoices', {
        url: '/invoices',
        template: '<invoices></invoices>'
      });
  });
