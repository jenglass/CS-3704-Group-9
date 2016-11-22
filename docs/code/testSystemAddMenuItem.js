describe('System test for adding a menu item to the database', function() {
	it('should add an item to the menu', function(){
		browser.get('http://localhost:12345/#/addForm');
		
		element(by.model('name')).sendKeys('Test Salad');
		element(by.model('cost')).sendKeys('8.50');
		element(by.model('description')).sendKeys('For Testing Purposes Only.');
		
		element(by.id('submitButton')).click();
		
		//Should be on the menu page now.
		browser.waitForAngular();
        expect(browser.getCurrentUrl()).toContain('#/menu');

		//Make sure that Test Salad is on the menu!
        var list = element.all(by.repeater('elem in menuList'))
        expect(list.last().getText()).toEqual('Test Salad\nFor Testing Purposes Only.\n$8.50');
	})
})