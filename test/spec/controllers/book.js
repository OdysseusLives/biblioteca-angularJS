'use strict';

describe('Controller: BookCtrl', function () {

    // load the controller's module
    beforeEach(module('bibliotecaApp'));

    var BookCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        BookCtrl = $controller('BookCtrl', {
            $scope: scope
        });
    }));

    it('should display all available books', function () {
        expect(scope.books['The Jungle Book']['title']).toEqual('The Jungle Book');
    });

    it('should be able to checkout a book',function(){
        scope.checkout('The Jungle Book', 'Aubrey');
        expect(scope.books['The Jungle Book'].checkedOutBy).toBe('Aubrey');
    });
});
