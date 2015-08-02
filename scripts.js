(function() {
  var app = angular.module("NeoModule", []);

  var MainController = function($scope, $http) {

    $scope.message = "hi Neo";

    var prakashDetails = function(response) {
      $scope.user = response.data;
    };

    var onError = function(reason) {
      $scope.error = "Can't Display now";
    };
    $scope.search = function() {
       $http.get("https://api.github.com/users/"+ $scope.username).then(prakashDetails, onError);
    };
   $scope.username="prakash-raj";

  };
  app.controller("MainController", ["$scope", "$http", MainController]);
}());
