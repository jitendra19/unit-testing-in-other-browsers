describe('unit test for firstController', function() {
  var scope;
  //find and load myapp module from files section of karma.conf.js
  beforeEach(module('myapp'));

  beforeEach(inject(function($rootScope, $controller) {
    //creating scope
    scope = $rootScope.$new();
    //instantiating firstController while passing $scope as argument/dependencies
    $controller('firstController', {$scope: scope});
  }));

  it('to test the value of title', function() {
    console.log(scope.title);
    expect(scope.title).toBe('World !');
  });

  it('to test add function of firstController', function() {
    scope.a = 5;
    scope.b = 4;
    scope.add();
    expect(typeof scope.c).toEqual('number');
    expect(scope.c).toEqual(jasmine.any(Number));
    expect(scope.c).toBeGreaterThan(0);
    expect(scope.c).toBe(9);
  });

});