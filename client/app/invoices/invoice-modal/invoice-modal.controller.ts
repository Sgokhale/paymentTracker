
'use strict';

class InvoiceModalController {

  static $inject = ['selectedInvoice'];
  private selectedInvoice;
  public invoice;
  constructor(selectedInvoice) {
    this.selectedInvoice = selectedInvoice;
    this.invoice = angular.copy(selectedInvoice);
  }

}

angular.module('wwqaInvAppApp').controller('InvoiceModalController', InvoiceModalController);
