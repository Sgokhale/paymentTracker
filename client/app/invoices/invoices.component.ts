
'use strict';

(function () {

  class InvoiceController {

    public static $inject = ['$state', '$uibModal'];
    private $state;
    private $uibModal;
    private modalConfig = {
      windowTopClass: 'margin-top-50',
      animation: true,
      templateUrl: 'app/invoices/invoice-modal/invoice-modal.html',
      controller: InvoiceModalController,
      controllerAs: 'vm',
      overflow: 'hidden',
      size: 'lg',
      resolve: {}
    };
    public searchQuery = {
      inv: undefined,
      client: undefined,
      date: undefined,
      amt: undefined
    };
    public invoicesToDisplay;

    public test = ['a', 'aa', 'aaa', 'aaaa'];

    public masterData = [
      {
        inv: '123',
        client: 'dummy',
        date: 'Mar. 25 2017',
        amt: '$10,000.00',
        status: 'settled'
      },
      {
        inv: '1231',
        client: 'dummy1',
        date: 'Mar. 25 2017',
        amt: '$10,000.00',
        status: 'pending'
      }
    ];

    constructor($state, $uibModal) {
      this.$state = $state;
      this.$uibModal = $uibModal;
    }

    public showDetails(invoice) {
      this.modalConfig.resolve = {
        selectedInvoice: function() {
          return invoice;
        }
      };
      let modalInstance = this.$uibModal.open(this.modalConfig);
      modalInstance.result.then(() => {
        console.log('modal closed');
      });
    }

    public filterData(item, key) {

      if (item === null) {
        this.invoicesToDisplay = angular.copy(this.masterData);
      } else if (angular.isDefined(item) && angular.isObject(item)) {
        let query = {};
        query[key] = item[key];
        let filteredData = _.filter(this.masterData, query);
        this.invoicesToDisplay = filteredData;
      }

    }

    $onInit = () => {
      this.invoicesToDisplay = angular.copy(this.masterData);
    }

  }

  angular.module('wwqaInvAppApp')
    .component('invoices', {
      controller: InvoiceController,
      templateUrl: 'app/invoices/invoices.html',
      controllerAs: 'vm'
    });

})();

