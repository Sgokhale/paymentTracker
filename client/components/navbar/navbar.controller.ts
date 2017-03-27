'use strict';

class NavbarController {
  //start-non-standard
  menu = [
    {
    title: 'Dashboard',
    state: 'dashboard'
  },
  {
    title: 'Invoices',
    state: 'invoices'
  }
  ];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }

}

angular.module('wwqaInvAppApp')
  .controller('NavbarController', NavbarController);
