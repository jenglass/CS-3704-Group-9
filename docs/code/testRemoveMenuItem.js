/**
* This unit test tests adding a menu item to the database.
* The two functions tested were:
*	checkSubmit();
*	submit();
* Each function was tested twice, once with happy path testing
* and once with where not all of the data was entered.
*/
describe("removeFormController", function(){
	//Setup for testing.
	beforeEach(module("restaurantManagementApp"))
	var $controller;
	var $httpBackend;
	
	beforeEach(inject(function($injector){
		$httpBackend = $injector.get('$httpBackend');
	}))
	beforeEach(inject(function(_$controller_){
    	// The injector unwraps the underscores (_) from around the parameter names when matching
    	$controller = _$controller_;
    }));
    
    /**
    * This tests the checkSubmit() function.
    */
	describe("check if the an item has been selected", function(){
		it('testing checkSubmit()', function(){
			var $scope = {};
			var controller = $controller('removeFormController', { $scope: $scope });
      		expect($scope.checkSubmit()).toEqual(true);
      		$scope.selected = '';
      		expect($scope.checkSubmit()).toEqual(true);
      		$scope.selected = {name: "Test Salad", cost: "9.00", description: "For Testing Purposes."}
      		expect($scope.checkSubmit()).toEqual(false);
		})
		
		it('testing checkSubmit() using empty strings', function(){
			var $scope = {};
			var controller = $controller('removeFormController', { $scope: $scope });
      		expect($scope.checkSubmit()).toEqual(true);
      		$scope.selected = '';
      		expect($scope.checkSubmit()).toEqual(true);
      		$scope.selected = {name: "Test Salad"}
      		expect($scope.checkSubmit()).toEqual(false);    		
		})
	})
	
	/**
	* This tests the submit() function.
	*/
	describe("check if the submit function posts the correct information", function(){
		it ('testing submit()', function(){
			var $scope = {};
			var controller = $controller('removeFormController', { $scope: $scope });
			
			//Pull the menu
			$httpBackend.expectGET('http://localhost:8000/getMenu').respond(201, [
			{name: "Test Salad", cost: "9.00", description: "For Testing Purposes."},
			{name: "Test Burger", cost: "9.00", description: "For Testing Purposes."}
			])
			
			//Expect a post request with our data.
			$httpBackend.expectPOST('http://localhost:8000/removeFromMenu', {
				name:'Test Salad', 
				cost:'8.50', 
				description:'For Testing Purposes'
			}).respond(201, '');
				
			$scope.selected = {name: "Test Salad", cost: "8.50", description: "For Testing Purposes"}
			$scope.submit();
			$httpBackend.flush();
		})
		
		it ('testing submit() where not everything is filled', function(){
			var $scope = {};
			var controller = $controller('removeFormController', { $scope: $scope });
			//Pull the menu
			$httpBackend.expectGET('http://localhost:8000/getMenu').respond(201, [
				{name: "Test Salad", cost: "9.00", description: "For Testing Purposes."},
				{name: "Test Burger", cost: "9.00", description: "For Testing Purposes."}
			])
			
			//Expect no post request to be made.
			//Console.error will say an error has been made with disabling the button.
				
			$scope.selected = "";
			$scope.submit();
			$httpBackend.verifyNoOutstandingRequest();
		})
	})
})