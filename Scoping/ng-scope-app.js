  angular.module('scoping', [])
    .controller('MainController', function($scope){
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
    });