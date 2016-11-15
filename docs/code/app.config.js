angular.module("restaurantManagementApp")
	.config(["$routeProvider", function ($routeProvider){
		$routeProvider
			.when("/", {
				templateUrl:"login.html"
			})
			.when("/menu", {
				templateUrl:"menu.html"
			})
	}])