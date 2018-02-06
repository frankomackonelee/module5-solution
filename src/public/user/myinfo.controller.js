(function(){
  "use strict";

  angular.module('public')
  .controller('MyinfoController', MyinfoController);

  MyinfoController.$inject = ['MenuService'];

  function MyinfoController(MenuService){

    console.log("I'm in myinfocontroller");

    MyinfoController = this;

    MyinfoController.user = MenuService.getUserDetails();

    console.log("User details...");

    console.log(MyinfoController.user);

  }
})()
