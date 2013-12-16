'use strict';

angular.module('bibliotecaApp')
    .controller('BookCtrl', function ($scope) {
        $scope.books = {'The Jungle Book': {'title':'The Jungle Book', checkedOutBy:''}, 'Harry Potter':{'title': 'Harry Potter', 'checkedOutBy': ''}};

        $scope.checkout = function(bookName, personName){
            $scope.books[bookName].checkedOutBy = personName;
        };



            $scope.isAvailable = function(bookName) {
            return $scope.books[bookName].checkedOutBy == '';
        }
    })

    .filter('isAvailable', function () {
        return function (input, itemType) {
            var result = input + ' ' + itemType;
            if (input >  1) result += 's';
            return result;
        }
    });

