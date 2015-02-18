'use strict';

/**
 * @ngdoc function
 * @name tvscheduleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tvscheduleApp
 */
var tvscheduleApp = angular.module('tvscheduleApp');

tvscheduleApp.controller('MainCtrl', function ($scope, $http) {
	$scope.awesomeThings = [
	'HTML5 Boilerplate',
	'AngularJS',
	'Karma'
	];
});
	
tvscheduleApp.directive('showsList', function () {
	return {
		restrict: 'E',
		templateUrl: '../views/shows-list.html',
		controller: function ($scope, $http, $filter) {
			$http.get('../data/shows.json').
		    success(function(data, status, headers, config) {
		      $scope.shows = data;
		    }).
		    error(function(data, status, headers, config) {
		      // log error
		    });

			// $scope.show = {};

			// $scope.addShow = function(show, $http) {
			// 	$scope.show.createdOn = Date.now();
			// 	$scope.shows.push($scope.show);
			// 	$scope.show = {};

			// };

		},
		controllerAs: 'schedule'
	}; 
});