/**
* This unit test tests adding a menu item to the database.
* The two functions tested were:
*	checkSubmit();
*	submit();
* Each function was tested twice, once with happy path testing
* and once with where not all of the data was entered.
*/
describe("addFormController", function(){
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
	describe("check if the addForm has all of the information filled out", function(){
		it('testing checkSubmit()', function(){
			var $scope = {};
			var controller = $controller('addFormController', { $scope: $scope });
      		expect($scope.checkSubmit()).toEqual(true);
      		$scope.name = 'testName';
      		expect($scope.checkSubmit()).toEqual(true);
      		$scope.cost = '8.50';
      		expect($scope.checkSubmit()).toEqual(true);
      		$scope.description = 'For Testing Purposes'
      		expect($scope.checkSubmit()).toEqual(false);
		})
		
		it('testing checkSubmit() using empty strings', function(){
			var $scope = {};
			var controller = $controller('addFormController', { $scope: $scope });
      		expect($scope.checkSubmit()).toEqual(true);
      		$scope.name = '';
      		expect($scope.checkSubmit()).toEqual(true);
      		$scope.cost = 8.50;
      		expect($scope.checkSubmit()).toEqual(true);
      		$scope.description = 'For Testing Purposes'
      		expect($scope.checkSubmit()).toEqual(true);
      		
      		$scope.name = 'testName'
      		expect($scope.checkSubmit()).toEqual(false);
      		
      		$scope.cost = ''
      		expect($scope.checkSubmit()).toEqual(true);
      		
		})
	})
	
	/**
	* This tests the submit() function.
	*/
	describe("check if the submit function posts the correct information", function(){
		it ('testing submit()', function(){
			var $scope = {};
			var controller = $controller('addFormController', { $scope: $scope });
			
			//Expect a post request with our data.
			$httpBackend.expectPOST('http://localhost:8000/addToMenu', {
				name:'testName', 
				cost:'8.50', 
				description:'For Testing Purposes'
			}).respond(201, '');
				
			$scope.name = 'testName';
      		$scope.cost = '8.50';
      		$scope.description = 'For Testing Purposes'	
			$scope.submit();
			$httpBackend.flush();
		})
		
		it ('testing submit() where not everything is filled', function(){
			var $scope = {};
			var controller = $controller('addFormController', { $scope: $scope });
			
			//Expect no post request to be made.
			//Console.error will say an error has been made with disabling the button.
				
			$scope.cost = '8.50';
      		$scope.description = 'For Testing Purposes'	
			$scope.submit();
			$httpBackend.verifyNoOutstandingRequest();
		})
	})
})