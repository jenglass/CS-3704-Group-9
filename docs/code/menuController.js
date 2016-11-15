angular.module("restaurantManagementApp")
	.controller("menuController", ["$scope", function($scope){
		//MenuList should pull from the database. This is just test data right now.
		$scope.menuList = [
			{
				name: "Burger", 
				cost: "9.00", 
				description: "1/2 pound beef patty with lettuce, tomato, ketchup, and mustard."
			},
			{
				name: "Salad", 
				cost: "8.50", 
				description: "Romaine lettuce served with croutons, beets, and dressing."
			},
			{
				name: "Personal Pizza", 
				cost: "9.00", 
				description: "8 inch personal pan pizza with choice of two toppings."
			}];
	}])