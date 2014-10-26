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
    })
    .directive('friends',function(){
    
      return  {
          restrict :'E',
          template: 'Name : {{name}}',
          scope :{
            name:'@'
          }
      };
    });