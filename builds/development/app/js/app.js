var myApp = angular.module('myApp', ['ngRoute',
'firebase', 'appControllers'])
.constant('FIREBASE_URL', 'https://amber-heat-4202.firebaseio.com/');

var appControllers = angular.module('appControllers',
  ['firebase']);



myApp.run(['$rootScope', '$location', function($rootScope, $location) {
  $rootScope.$on('$routeChangeError',
  function(event, next, previous, error) {
    if(error === 'AUTH_REQUIRED') {
      $rootScope.message='Sorry, you must log in to access that page';
      $location.path('/login');
    }
  });
}]);



myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/login', {
      templateUrl: 'views/login.html',
      controller:  'RegistrationController'
    }).
    when('/search', {
      templateUrl: 'views/search.html',
      controller:  'SearchController'
    }).
    when('/register', {
      templateUrl: 'views/register.html',
      controller:  'RegistrationController'
    }).
    when('/checkins/:uId/:mId', {
      templateUrl: 'views/checkins.html',
      controller:  'CheckInsController'
    }).
    when('/checkins/:uId/:mId/checkinsList', {
      templateUrl: 'views/checkinslist.html',
      controller:  'CheckInsController'
    }).
    when('/meetings', {
      templateUrl: 'views/meetings.html',
      controller: 'MeetingsController',
      resolve : {
        currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        }
      }
    }).
    when('/dashboard', {
      templateUrl: 'views/dashboard/dashboard.html',
      controller: 'DashboardController'
    }).
    when('/aaf', {
      templateUrl: 'views/dashboard/aaf.html',
      controller: 'DashboardController'
    }).
    when('/operations', {
      templateUrl: 'views/dashboard/operations.html',
      controller: 'DashboardController'
    }).
    when('/reports', {
      templateUrl: 'views/dashboard/reports.html',
      controller: 'DashboardController'
    }).
    when('/daily-processing', {
      templateUrl: 'views/dashboard/daily-processing.html',
      controller: 'DashboardController'
    }).
    when('/rules', {
      templateUrl: 'views/dashboard/daily-processing.html',
      controller: 'DashboardController'
    }).
    otherwise({
      redirectTo: '/dashboard'
    });
}]);