  angular.module('rootScopeApp', [])
    .controller('p1', function($scope){
       $scope.$on('rootScope:broadcast',function(event,data){
         console.log(data + " from p1");
       });
    })

    .controller('c1',function($scope){
      $scope.$on('rootScope:broadcast',function(event,data){
         console.log(data + " from c1");
       });
    })

    .controller('c2',function($scope, $rootScope,$timeout){
        $timeout(function(){
          $rootScope.$broadcast("rootScope:broadcast","broadcasting rootScope")
        },1000);
      
        $scope.$on('rootScope:broadcast',function(event,data){
         console.log(data + " from c2");
       });
    })

    .controller('c3',function($scope){
      $scope.$on('rootScope:broadcast',function(event,data){
         console.log(data + " from c3");
       });
    });