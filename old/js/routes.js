'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('PilotApp').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/login.html'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'templates/dashboard.html'
            })
            .state('tables', {
                url: '/tables',
                templateUrl: 'templates/tables.html'
            })
            .state('fillChecklist', {
                url: '/fillChecklist',
                templateUrl: 'templates/fillChecklist.html'
            })
            .state('driver_info', {
                url: '/driver_info',
                templateUrl: 'templates/driver_info.html',
                controller: 'formController'
            })
            // nested states 
            // each of these sections will have their own view
            // url will be nested (/form/profile)
            .state('driver_info.driver_personal', {
                url: '/driver_personal',
                templateUrl: 'templates/driver_personal.html',
                controller: 'formController'
            })
            .state('driver_info.driver_rewards', {
                url: '/driver_rewards',
                templateUrl: 'templates/driver_rewards.html'
            })
            .state('driver_info.driver_consequence', { 
                url: '/driver_consequence',
                templateUrl: 'templates/driver_consequence.html'
            })
            
            // url will be /form/interests
            .state('driver_info.driver_medical', {
                url: '/driver_medical',
                templateUrl: 'templates/driver_medical.html'
            })
            
            // url will be /form/payment
            .state('driver_info.driver_training', {
                url: '/driver_training',
                templateUrl: 'templates/driver_training.html'
            })
            .state('test', {
                url: '/test/:pgno',
                controller:customerCtrl,
                templateUrl: 'templates/test.html'
            });
    }
]);



// our controller for the form
// =============================================================================
app.controller('formController', function($scope,$timeout) {
    // we will store all of our form data in this object
    $scope.formData = {};
    
    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');  
    };
    
}); 