(function (){
  'use strict';

  angular
    .module('myApp')
    .controller('MainController', MainController);

    MainController.$inject = ['DataService', '$log', '$state'];

    function MainController(DataService, $log, $state) {
      var vm = this;
      vm.sort;
      vm.dataList = DataService.dataList;
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

