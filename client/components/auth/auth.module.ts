'use strict';

angular.module('wwqaInvAppApp.auth', [
  'wwqaInvAppApp.constants',
  'wwqaInvAppApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
