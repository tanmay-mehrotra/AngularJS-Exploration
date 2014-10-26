  angular.module('isolate_scope', [])
    .controller('isolateScopeController', function($scope){
      $scope.persons = [
                         {
                           name:"tanmay",
                           age:"28"
                         },
                         {
                           name: "James",
                           age:"28"
                         },
                         {
                           name:"Rylan",
                           age:"26"
                         },
                         {
                            name:"Aditya",
                            age:"23"
                         }
                       ];
      
      $scope.printScopeToFile = function(greeting,from_user){
          console.log(greeting + " from " + from_user);
          for(var i in $scope.persons){
            console.log("Name = " + $scope.persons[i].name + " Age = " + $scope.persons[i].age);
          }
      };
    })
    .directive('friends',function(){
      return {
          restrict :'E',
          template: '<input type="text" ng-model="name">',
          scope :{
            name:'=frnd'
          }
      };
    })
    .directive('myButton',function(){
      return {
          restrict: 'E',
          template: '<input type="text" ng-model="value">' +  
                    '<input type="text" ng-model="usr">' +
                    '<button ng-click="isolatedFunction({message:value,user:usr})">callParentfunction</button>',
          scope : {
            isolatedFunction:"&"
          }
      };
    });