'use strict';

/**
 * @ngdoc function
 * @name angularjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsApp
 */
angular.module('angularjsApp')
    .controller('MainCtrl', function ($scope) {
        $scope.editorOptions = {
            lineWrapping : true,
            lineNumbers: true,
            readOnly: 'nocursor',
            mode: 'xml',
        };
  });
