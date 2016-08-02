(function (){
  'use strict'

  angular
  .module('myApp')
  .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];


  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('Home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'MainController',
        controllerAs: "vm"
      })
      .state('projects', {
        url:'/projects',
        templateUrl: 'templates/projects.html',
        controller: 'MainController',
        controllerAs: "vm"
      })
      .state('contact', {
        url:'/contact',
        templateUrl: 'templates/contact.html',
      })
      $urlRouterProvider.otherwise('/');
  }


})();
