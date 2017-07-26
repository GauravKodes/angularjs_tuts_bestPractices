describe('PhoneListController', function() {

  beforeEach(module('phonecatApp'));

  it('should create a `phones` model with 3 phones', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('WorldController', {$scope: scope});

    expect(scope.World.length).toBe(2);
    expect(scope.World[0].name).toBe('India');
    expect(scope.World[1].name).toBe('USA');
      
  }));

});