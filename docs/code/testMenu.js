describe("Menu Unit Tests", function(){
	beforeEach(module("restaurantManagementApp"))
	var $controller;
	var $httpBackend;
	var $location;
	var getRequest;
	
	beforeEach(inject(function($injector){
		$httpBackend = $injector.get('$httpBackend');
	}))
	beforeEach(inject(function(_$controller_, _$location_){
    	// The injector unwraps the underscores (_) from around the parameter names when matching
    	$controller = _$controller_;
    	$location = _$location_;
    	getRequest = $httpBackend.when('GET', 'http://localhost:8000/getMenu')
                            .respond(200, [{name: 'test', cost: '9.00', description: 'test'}, 
                            	{name: 'test2', cost: '8.00', description: 'test2'}]);
    }));
    
    /**
    * This tests the submit() function in the login controller.
    */
	describe("Testing the submit function", function(){
		it('testing submit()', function(){
			var $scope = {};
			var controller = $controller('loginController', { $scope: $scope, $location: $location });
      		$scope.submit()
      		expect($location.path()).toEqual("")
      		
      		$scope.name = "manager1";
      		
      		$scope.submit()
      		expect($location.path()).toEqual("")
      		
      		$scope.pass = "password"
      		
      		$scope.submit()
      		expect($location.path()).toEqual("/menu")
		})
		
		it('testing submit() with unusual input', function(){
			var $scope = {};
			var controller = $controller('loginController', { $scope: $scope, $location: $location });
      		$scope.submit()
      		expect($location.path()).toEqual("")
      		
      		$scope.name = "manager";
      		
      		$scope.submit()
      		expect($location.path()).toEqual("")
      		
      		$scope.pass = "password"
      		
      		$scope.submit()
      		expect($location.path()).toEqual("")
      		
      		$scope.name = 1234;
      		
      		$scope.submit()
      		expect($location.path()).toEqual("")
      		
      		$scope.name = "manager1";      		
      		$scope.pass = "password"
      		
      		$scope.submit()
      		expect($location.path()).toEqual("/menu")
      		
		})
	})
	
	/**
	* This tests the pullMenu function in the menu controller
	*/
	describe("Testing the pullMenu function", function(){
		it('testing pullMenu() on controller initialization', function(){
			var $scope = {};
      		
      		$httpBackend.expectGET('http://localhost:8000/getMenu')
      		var controller = $controller('menuController', { $scope: $scope});
      		$httpBackend.flush();
		})
		
		it('testing pullMenu() with 404 response', function(){
			var $scope = {};
      		
      		getRequest.respond(404, '')
      		$httpBackend.expectGET('http://localhost:8000/getMenu')
      		var controller = $controller('menuController', { $scope: $scope});
      		$httpBackend.flush();
      		
		})
	})
})