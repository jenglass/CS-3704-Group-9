angular.module("restaurantManagementApp")
	.controller("menuController", ["$scope", "$http", "$location", function($scope, $http, $location){
    //Stores the menu
    $scope.menuList;

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
	
	$scope.addForm = function(){
		$location.path('/addForm')
	}
	
	$scope.deleteForm = function(){
		$location.path('/RemoveForm')
	}
	
	}])
