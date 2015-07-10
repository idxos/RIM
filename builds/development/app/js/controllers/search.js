myApp.controller('SearchController', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('api/wps-items.json').success(function(data) {
      $scope.items = data;
    });

    $scope.orderProp = 'list_price';
  }]);