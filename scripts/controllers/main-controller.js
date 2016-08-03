(function (){
  'use strict';

  angular
    .module('myApp')
    .controller('MainController', MainController);

    MainController.$inject = ['DataService', 'ContactService', '$log', '$state', '$stateParams'];

    function MainController(DataService, ContactService, $log, $state, $stateParams) {
      var vm = this;
      vm.kind = $stateParams.kind;
      vm.sort;
      vm.dataList = DataService.dataList;
      vm.contactList = ContactService.contactList;
      vm.grabItem = grabItem;
      vm.filter = filter;

      if (DataService.id !== undefined) {
        vm.selected = DataService.dataList[DataService.id];
      }

      function grabItem(itemName) {
        $log.warn(itemName);
        DataService.id = itemName;
        $state.go('project');
      }

      function filter(filterBy) {
        DataService.kind = filterBy;
      }
    }

})();

