
'use strict';

(function () {

  class HomeController {

    public static $inject = ['$state'];
    private $state;

    constructor($state) {
      this.$state = $state;
    }

    public stateChange(newState) {
      this.$state.go(newState);
    }

  }

  angular.module('wwqaInvAppApp')
    .component('home', {
      controller: HomeController,
      templateUrl: 'app/home/home.html',
      controllerAs: 'vm'
    });

})();

