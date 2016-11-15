angular.module("restaurantManagementApp")
	.controller("loginController", ["$scope", "$location", function($scope, $location){
	//Used for storing the username and password that the user typed in.
	$scope.name = "";
	$scope.pass = "";
	
	/**
	* This function is used for submitting a username and password
	* for authentication purposes. 
	*/
	$scope.submit = function(){
		if ($scope.name == "manager1" && $scope.pass == "password") {
			console.log("LoggedIn")
			$location.path('/menu');
		}
	}
}]);