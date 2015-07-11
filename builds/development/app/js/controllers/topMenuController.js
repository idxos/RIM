angular.module('myApp').controller('topMenuController', function ($scope) {

    $scope.menu =
        [   { "link": "/about", "title": "About" },
            { "link": "/home", "title": "Home" },
            { "link": "/search", "title": "Search" }
        ];


});