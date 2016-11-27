angular.module("restaurantManagementApp")
	.controller("removeFormController", ["$scope", "$http", "$location", function($scope, $http, $location){
    //Stores the menu
    $scope.menuList;
    $scope.selected;
    
    /**
	* This function checks to see if the user has selected a menu item.
	* Returns true to disable the submit button and false to enable the button.
	*/
	$scope.checkSubmit = function(){
		if ($scope.selected){
			return false;
		}
		return true;
	}
	
	/**
	* This function submits an item to be added to the database.
	*/
	$scope.submit = function(){
		if ($scope.selected){
			$http({
				method: 'POST',
				url: 'http://localhost:8000/removeFromMenu',
				data: $scope.selected
			}).then(function(response){
			
			}, function(err){
				console.log(err);
			})
			$location.path('/menu');
		}
		else {
			console.error('Error occurred with disabling the button.');
		}
	}
	
	/**
	* This function just returns the user to the menu.
	*/
	$scope.cancel = function(){
		$location.path('/menu');
	}

    //Pull the menu from the database.
	$scope.pullMenu = function(){
		$http({
			method: 'GET',
			url: 'http://localhost:8000/getMenu'
		}).then(function(response){
			$scope.menuList = response.data;
		}, function(err){
			console.log(err);
		})
	}
	
	$scope.pullMenu();
	
	}])
