  angular.module('isolate_scope', [])
    .controller('isolateScopeController', function($scope){
      $scope.persons = [
                         {
                           name:"tanmay",
                           age:"28"
                         },
                         {
                           name: "abha",
                           age:"28"
                         },
                         {
                           name:"vidhu",
                           age:"26"
                         },
                         {
                            name:"sonal",
                            age:"23"
                         }
                       ];
      $scope.printScopeToFile = function(){
          console.log("printng to file.....");
          for(var i in $scope.persons){
            console.log("Name = " + $scope.persons[i].name + " Age = " + $scope.persons[i].age);
          }
      };
    })
    .directive('friends',function(){
    
      return  {
          restrict :'E',
          template: '<input type="text" ng-model="name">',
          scope :{
            name:'=frnd'
          }
      };
    });