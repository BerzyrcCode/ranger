'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('LoginCtrl', ['$scope', 'loginfire',
        function($scope, loginfire) {
            $scope.user = {
                username: 'test@test.com',
                password: 'password'
            };
            $scope.hide = true;
            $scope.LogMeIn = function() {
                console.log("Login");
                loginfire.$login('password', {
                    email: $scope.user.username,
                    password: $scope.user.password,
                    rememberMe: true
                }).then(
                    function(user) {
                        $scope.authUser = user;
                        $scope.hide = false;
                        $scope.show = true;
                        console.log('Logged in as: ', user);
                    },
                    function(error) {
                        console.error('Login failed: ', error);
                    });

            };
            $scope.RegisterMe = function() {
                console.log("Register");
                loginfire.$createUser($scope.user.username, $scope.user.password, function(error, user) {
                    if (!error) {
                        console.log('User Id: ' + user.uid + ', Email: ' + user.email);
                    }
                });
            };
            $scope.logout = function() {


            }

        }
    ])
    .controller('HomeCtrl', ['$scope',
        function($scope) {

        }
    ])
    .controller('ProjectCtrl', ['$scope',
        function($scope) {

        }
    ])
    .controller('CalendarCtrl', ['$scope',
        function($scope) {

        }
    ])
    .controller('NotesCtrl', ['$scope',
        function($scope) {

        }
    ]);