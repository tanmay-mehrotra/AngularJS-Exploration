  angular.module('scoping', [])
    .controller('OuterController', function($scope){
      $scope.outer_var = 10;
    
    })
    .directive('myDirective', function() {
      console.log("inside directive1");
      return {
        restrict :'E',
        link:function(scope){
        	scope.inner_var = 20;
        },
        template:'<p>{{inner_var}}</p></br><p>{{outer_var}}</p>'
      };
    });