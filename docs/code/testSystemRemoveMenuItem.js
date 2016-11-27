describe('System test for removing a menu item from the menu', function() {
	it('should add an item to the menu then remove it', function(){
		browser.get('http://localhost:12345/#/addForm');
		
		element(by.model('name')).sendKeys('Test Salad');
		element(by.model('cost')).sendKeys('8.50');
		element(by.model('description')).sendKeys('For Testing Purposes Only.');
		
		element(by.id('submitButton')).click();
		
		//Should be on the menu page now.
		browser.waitForAngular();
        expect(browser.getCurrentUrl()).toContain('#/menu');

		var list = element.all(by.repeater('elem in menuList'))
		var count = element.all(by.repeater('elem in menuList')).count();
		
        
        
        //Now we need to test what happens if we remove it.
        browser.get('http://localhost:12345/#/RemoveForm')
        
        element(by.model('selected')).click();
        element(by.id('Test Salad-option')).click();
    	element(by.id('submitButton')).click();
    	
    	//Should be on the menu page now.
		browser.waitForAngular();
        expect(browser.getCurrentUrl()).toContain('#/menu');
        
        //Make sure that the list is one item shorter.
        list = element.all(by.repeater('elem in menuList'))
        expect(list.count()).toBeLessThan(count);
	})
})