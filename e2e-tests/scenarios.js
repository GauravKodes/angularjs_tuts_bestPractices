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
    
   /* it('should filter the phone list as user types into the search box', function() {
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
        
        });*/
    it('we should be able to control the order by drop-down menu', function() {
       var queryField = element(by.model('$ctrl.query'));
       var orderSelect = element(by.model('$ctrl.orderProp'));
       var nameOption = orderSelect.element(by.css('option[value="name"]'));
       var phoneNameColumn = element.all(by.repeater('phone in $ctrl.phones').column('phone.name'));
        
        function getNames() {
            return phoneNameColumn.map(function(elem) {
                                       return elem.getText();
                                       });
        }
        queryField.sendKeys('tablet');
            
        expect(getNames()).toEqual([
            'Motorola XOOM\u2122 with Wi-Fi',
            'MOTOROLA XOOM\u2122'
        ]);
        nameOption.click();

        expect(getNames()).toEqual([
            'MOTOROLA XOOM\u2122',
            'Motorola XOOM\u2122 with Wi-Fi'
        ]);
    });
        
    });
