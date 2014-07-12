'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
    .value('version', '0.1');
/*
    .factory('firebaseref', '$firebase' [

        function($firebase) {
            var ref = new Firebase("https://ranger.firebaseio.com/");
            return $firebase(ref);
        }
    ])


    .factory('login', [ ''

        function() {
            var dataRef = new Firebase("https://ranger.firebaseio.com/");
            var loginObj = $firebaseSimpleLogin(dataRef);
            return loginObj;
        }
    ])
    */