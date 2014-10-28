  angular.module('scoping', [])
    .controller('OuterController', function($scope){
        $scope.ctrl_var = 10;
    })
    .directive('myDirective', function() {
      return {
        restrict :'E',
        scope:{},
        template:'<div ng-transclude></div></br><p>I will override Paragraph</p>',
        transclude:true
      };
    });