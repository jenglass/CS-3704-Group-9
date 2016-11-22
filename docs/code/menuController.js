angular.module("restaurantManagementApp")
	.controller("menuController", ["$scope", "$http", "$location", function($scope, $http, $location){
    //Stores the menu
    $scope.menuList;

    //Pull the menu from the database.
	$http({
		method: 'GET',
		url: 'http://localhost:8000/getMenu'
	}).then(function(response){
		$scope.menuList = response.data;
	}, function(err){
		console.log(err);
	})
	
	$scope.addForm = function(){
		$location.path('/addForm')
	}
	
	}])
