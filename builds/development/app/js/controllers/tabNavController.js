/**
 * Created by croberts on 4/14/15.
 */
angular.module('myApp').controller('tabNavController', function ($scope) {

    $scope.tabs = [
        { title:'Dynamic Title 1', content:'Dynamic content 1' },
        { title:'Dynamic Title 2', content:'Content in 2', disabled: true },
        { title:'Dynamic Title 3', content:'Content in 3', disabled: true },
        { title:'Dynamic Title 4', content:'Content in 4', disabled: true },
        { title:'Dynamic Title 5', content:'Content in 5', disabled: true },
        { title:'Dynamic Title 6', content:'Content in 6', disabled: true },
        { title:'Dynamic Title 7', content:'Content in 7', disabled: true }
    ];



});