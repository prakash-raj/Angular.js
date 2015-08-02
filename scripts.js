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

    $http.get("https://api.github.com/users/prakash-raj").then(prakashDetails, onError);

  };
  app.controller("MainController", ["$scope", "$http", MainController]);
}());
