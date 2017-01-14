;(function () {
  angular.module('fetchApp').factory('Response', function () {
    const Response = function (responseData) {
      this.statusCode = responseData.status;
      this.methodName = responseData.config.method;
      this.urlName = responseData.config.url;
      this.size = responseData.headers.length;
      console.log("responseData", responseData);
    };

    return Response;
  });
})();