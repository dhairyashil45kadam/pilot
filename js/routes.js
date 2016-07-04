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

            .state('Checklist', {
                url: '/Checklist',
                templateUrl: 'templates/Checklist.html'
            })

            .state('driver_info', {
                url: '/driver_info',
                templateUrl: 'templates/driver/driver_info.html',
                controller: 'driverformController'
            })
            // nested states 
            // each of these sections will have their own view
            // url will be nested (/form/profile)
            .state('driver_info.driver_personal', {
                url: '/driver_personal',
                templateUrl: 'templates/driver/driver_personal.html'
            })

            .state('driver_info.driver_rewards', {
                url: '/driver_rewards',
                templateUrl: 'templates/driver/driver_rewards.html'
            })

            .state('driver_info.driver_consequence', { 
                url: '/driver_consequence',
                templateUrl: 'templates/driver/driver_consequence.html'
            })

            .state('driver_info.driver_medical', {
                url: '/driver_medical',
                templateUrl: 'templates/driver/driver_medical.html'
            })
            
            .state('driver_info.driver_training', {
                url: '/driver_training',
                templateUrl: 'templates/driver/driver_training.html'
            })

            .state('driver', {
                url: '/driver/:pgno',
                controller:driverCtrl,
                templateUrl: 'templates/driver.html'
            })
            //Truck master
            .state('truck_info', {
                url: '/truck_info',
                templateUrl: 'templates/truck/truck_master.html',
                controller: 'truckMasterController'
            })

            //Transporter master
            .state('transporter_info', {
                url: '/transporter_info',
                templateUrl: 'templates/transporter/transporter_master.html',
                controller: 'transporterMasterController'
            });
    }
]);



