angular.module("restaurantManagementApp")
	.controller("addFormController", ["$scope", "$location", '$http', function($scope, $location, $http){
	//Used for storing the username and password that the user typed in.
	$scope.name = "";
	$scope.cost = "";
	$scope.description = "";
	
	/**
	* This function checks to see if the user can submit a menu item to the
	* database. Returns true to disable the submit button and false to enable the button.
	*/
	$scope.checkSubmit = function(){
		if ($scope.name && $scope.cost && $scope.description){
			return false;
		}
		return true;
	}
	
	/**
	* This function submits an item to be added to the database.
	*/
	$scope.submit = function(){
		$http({
			method: 'POST',
			url: 'http://localhost:8000/addToMenu',
			params: {name:$scope.name, cost:$scope.cost, description:$scope.description}
		}).then(function(response){
		
		}, function(err){
			console.log(err);
		})
		
		$location.path('/menu');
	}
	
	/**
	* This function just returns the user to the menu.
	*/
	$scope.cancel = function(){
		$location.path('/menu');
	}
}]);