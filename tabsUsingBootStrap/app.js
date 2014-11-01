angular.module("tabApp",[])
	.controller("tabController",function($scope){
		$scope.currentTab = "home";
		
		$scope.isSelected = function(tab){
			if($scope.currentTab === tab){
				return true;
			}else{
				return false;
			}
		};  

		$scope.setTab = function(tab){
            $scope.currentTab = tab;
		};
	});