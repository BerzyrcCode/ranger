'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'firebase',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
])
    .factory("firebaseService", ["$firebase",
        function($firebase) {
            var ref = new Firebase("https://ranger.firebaseio.com/");

            return function(authuserid) {
                return $firebase(ref + authuserid);
            }
        }
    ])
    .factory('loginfire', ['$firebaseSimpleLogin',
        function($firebaseSimpleLogin) {

            var dataRef = new Firebase("https://ranger.firebaseio.com/");
            var loginObj = $firebaseSimpleLogin(dataRef);
            return loginObj;
        }
    ])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'partials/home.html',
                controller: 'HomeCtrl'
            });
            $routeProvider.when('/forest', {
                templateUrl: 'partials/project.html',
                controller: 'ProjectCtrl'
            });
            $routeProvider.when('/calendar', {
                templateUrl: 'partials/calendar.html',
                controller: 'CalendarCtrl'
            });
            $routeProvider.when('/notes', {
                templateUrl: 'partials/notes.html',
                controller: 'NotesCtrl'
            });
            $routeProvider.otherwise({
                redirectTo: '/'
            });
        }
    ]);