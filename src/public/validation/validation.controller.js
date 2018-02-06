(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['MenuService'];

function RegistrationController(MenuService) {
  var reg = this;

  reg.short_name_error = false;
  reg.user_data_saved = false;

  reg.submitUserInfo = function(){
      console.log("submit clicked");
      var promise = MenuService.getShortNameData( reg.user.short_name )

      promise.then(function (response) {
        console.log("What we got back...");
        console.log(response.data);
        MenuService.setUserDetails(reg.user);
        reg.user.favourite_details=response.data;
        reg.short_name_error = false;
        reg.user_data_saved = true;
		  })
		  .catch(function (error) {
        console.log("Oops there was an error...");
		    console.log(error);
        reg.short_name_error = true;
		  })
  }

}

})();
