;(function(){

  const app = angular.module('fetchApp', [])
  app.controller('MainController', function(requestService){

  });

  app.service('requestService', function($http){
    this.get = (url) => $http.get(url);
  });
})();

