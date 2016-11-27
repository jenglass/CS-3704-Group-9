describe('System test for a user seeing the menu', function() {
	it('should show the menu after login', function(){
		browser.get('http://localhost:12345/');
		
		element(by.model('name')).sendKeys('manager1');
		element(by.model('pass')).sendKeys('password');
		
		element(by.buttonText('Submit')).click();
		
		//Should be on the menu page now.
		browser.waitForAngular();
        expect(browser.getCurrentUrl()).toContain('#/menu');
       
        var list = element.all(by.repeater('elem in menuList'))
        expect(list.count()).toBeGreaterThan(0);
	})
})