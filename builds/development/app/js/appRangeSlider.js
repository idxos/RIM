var app = angular.module('plunkr', ['ngResource', 'ui.bootstrap', 'ui-rangeSlider']);

app.factory('dataFactory', function($resource) {
  return $resource('data.json');
});

app.controller('MainCtrl', function($scope, dataFactory) {
  $scope.exercise = dataFactory.query();
  $scope.predicate = '-competed_on';
  
  $scope.totalItems = $scope.exercise.length;
  $scope.itemsPerPage = 21
  $scope.currentPage = 1;
  
  $scope.pageCount = function () {
     return Math.ceil($scope.exercise.length / $scope.itemsPerPage);
   };

   $scope.exercise.$promise.then(function () {
    $scope.totalItems = $scope.exercise.length;
    $scope.$watch('currentPage + itemsPerPage', function() {
      var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
        end = begin + $scope.itemsPerPage;

      $scope.filteredExercise = $scope.exercise.slice(begin, end);
    });
   });
  
  $scope.runSliderConfig = {
     min:  0,
     max:  120,
     step: 10,
   };
   $scope.swimSliderConfig = {
     min:  0,
     max:  120,
     step: 10,
   };
   $scope.sliderRanges = {
     runMin: 0,
     runMax: 120,
     swimMin: 0,
     swimMax: 120
   };
});


app.filter('hourMinFilter', function () {
  return function (value) {
    if (value === 120) return 'All'
    var h = parseInt(value / 60);
    var m = parseInt(value % 60);
    var hStr = (h > 0) ? h + 'hr'  : '';
    var mStr = (m > 0) ? m + 'min' : '';
    var glue = (hStr && mStr) ? ' ' : '';
    return hStr + glue + mStr;
  };
});

app.filter('rangeFilter', function() {
  return function(items, sliderRanges ) {
    
    /*
      This is working well now, it was really  
      
    */
    var filtered = [];
    var runMin = parseInt(sliderRanges.runMin);
    var runMax = parseInt(sliderRanges.runMax);
    var swimMin = parseInt(sliderRanges.swimMin);
    var swimMax = parseInt(sliderRanges.swimMax);

    angular.forEach(items, function(item) {
      if((item.run_time >= runMin && item.run_time <= runMax) && (item.swim_time >= swimMin && item.swim_time <= swimMax)) {
        filtered.push(item);
      }
    });
    
    return filtered;
  };
});