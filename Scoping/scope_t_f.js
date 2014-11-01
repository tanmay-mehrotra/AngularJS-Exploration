  angular.module('rootScopeApp', [])
    .controller('c1', function($scope){
        $scope.name = "tanmay";
        $scope.age = "40";
    })

    .directive('d1',function(){
        return {
          restrict:'E',
          scope:false,
          link:function(scope){
            scope.name="sonal";
            scope.age="23";
          },
          template:'My name is : {{name}} and age is : {{age}}'
        };
    });