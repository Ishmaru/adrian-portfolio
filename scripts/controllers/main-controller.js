(function (){
  'use strict';

  angular
    .module('myApp')
    .controller('MainController', MainController);

    MainController.$inject = ['DataService', 'ContactService', '$log', '$state'];

    function MainController(DataService, ContactService, $log, $state) {
      var vm = this;
      vm.kind = DataService.kind;
      vm.sort;
      vm.dataList = DataService.dataList;
      vm.contactList = ContactService.contactList;
      vm.grabItem = grabItem;

      if (DataService.id !== undefined) {
        vm.selected = DataService.dataList[DataService.id];
      }

      function grabItem(itemName) {
        $log.warn(itemName);
        DataService.id = itemName;
        $state.go('project');
      }
    }

})();

