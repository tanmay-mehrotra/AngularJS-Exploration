  angular.module('directives1', [])
    .controller('directive1Controller', function($scope){
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
      function linkFunction(scope, element, attrs){
          console.log("current person " + scope.person.name);
          element.css("border","1px solid black");
      }

      return  {
          restrict :'E',
          template: 'Name : {{person.name}} Age: {{person.age}}',
          scope :{
              person : '=frnd'
          },
          link: linkFunction
      };
    });