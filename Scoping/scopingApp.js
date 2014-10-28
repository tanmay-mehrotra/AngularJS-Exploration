  angular.module('scoping', [])
    .controller('OuterController', function($scope){
      $scope.outer_var = 10;
    
    })
    .controller('MiddleController', function($scope) {
      $scope.middle_var=20;
    });