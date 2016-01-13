'use strict';

/**
 * @ngdoc overview
 * @name angularjsApp
 * @description
 * # angularjsApp
 *
 * Main module of the application.
 */
angular
    .module('angularjsApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ui.router',
        'ngSanitize',
        'ngTouch',
        'ui.codemirror'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: 'views/index.html',
            })

        // Introduction
            .state('introduction', {
                url: "/introduction",
                templateUrl: 'views/Module-1/index.html',
            })
            .state('build', {
                url: "/build-connected-devices",
                templateUrl: 'views/Module-2/index.html',
            })
            .state('connect', {
                url: "/connect-devices",
                templateUrl: 'views/Module-3/index.html',
            })
            .state('gateway', {
                url: "/monitoring-sensors",
                templateUrl: 'views/Module-4/index.html',
            })
            .state('admin', {
                url: "/administration-interface",
                templateUrl: 'views/Module-5/index.html',
            })
            .state('cbms', {
                url: "/cbms",
                templateUrl: 'views/Module-6/index.html',
            })
            .state('security', {
                url: "/security",
                templateUrl: 'views/Module-7/index.html',
            });
    })
    
;


// .config(function ($routeProvider) {
//   $routeProvider
//         .when('/', {
//             templateUrl: 'views/index.html',
//             controller: 'MainCtrl',
//             controllerAs: 'main'
//         })
//         .when('/Module-1/index', {
//             templateUrl: 'views/Module-1/index.html',
//             controller: 'MainCtrl',
//             controllerAs: 'main'
//         })
//         .when('/Module-2/index', {
//             templateUrl: 'views/Module-2/index.html',
//             controller: 'MainCtrl',
//             controllerAs: 'main'
//         })
//         .when('/Module-3/index', {
//             templateUrl: 'views/Module-3/index.html',
//             controller: 'MainCtrl',
//             controllerAs: 'main'
//         })
//         .when('/Module-4/index', {
//             templateUrl: 'views/Module-4/index.html',
//             controller: 'MainCtrl',
//             controllerAs: 'main'
//         })
//         .when('/Module-5/index', {
//             templateUrl: 'views/Module-5/index.html',
//             controller: 'MainCtrl',
//             controllerAs: 'main'
//         })
//         .when('/Module-6/index', {
//             templateUrl: 'views/Module-6/index.html',
//             controller: 'MainCtrl',
//             controllerAs: 'main'
//         })
//         .when('/Module-7/index', {
//             templateUrl: 'views/Module-7/index.html',
//             controller: 'MainCtrl',
//             controllerAs: 'main'
//         })
//     .otherwise({
//       redirectTo: '/'
//     });

