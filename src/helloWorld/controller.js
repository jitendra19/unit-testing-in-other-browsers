   angular.module("myapp", [])
    .controller("firstController", function($scope) {
       $scope.title = "World !";
       $scope.add = function(){
       	$scope.c = parseInt($scope.a) + parseInt($scope.b);
       };
    });