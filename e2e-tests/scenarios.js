'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing
/*
describe('My app', function() {

  beforeEach(function() {
    browser.get('index.html');
  });

});*/

describe('PhoneCat Application', function() {
    beforeEach(function() {
        browser.get('index.html');
    });
    
    it('should filter the phone list as user types into the search box', function() {
        var phoneList = element.all(by.repeater('phone in $ctrl.phones'));
        var query = element(by.model('$ctrl.query'));
        
        
        expect(phoneList.count()).toBe(3);
        query.sendKeys('nexus');
        expect(phoneList.count()).toBe(1);
        
        query.clear();
        
        expect(phoneList.count()).toBe(3);
        query.sendKeys('motorola');
        expect(phoneList.count()).toBe(2);
        
        query.clear();
        
        expect(phoneList.count()).toBe(3);
        query.sendkeys('apple');
        expect(phoneList.count()).toBe(0);
        
        });
        
    });
