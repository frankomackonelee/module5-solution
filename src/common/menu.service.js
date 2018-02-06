(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getShortNameData = function(short_name){
    console.log("running getShortNameData in menu.service")
    // https://YOUR-CHOSEN-SUBDOMAIN.herokuapp.com/menu_items/SHORT-NAME.json
    var url = ApiPath + "/menu_items/" + short_name + ".json";
    return $http({
	      method: "GET",
		    url: (url),
	  });
  }

  service.setUserDetails = function(user){
    console.log("saving user... ")
    console.log(user);
    service.userDetails = user;
  }

  service.getUserDetails = function(){
    console.log("retrieving user")
    return service.userDetails;
  }

}

})();
