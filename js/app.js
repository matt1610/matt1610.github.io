var App = /**
	*  Module
	*
	* Description
	*/
	angular.module('App', [])

	.controller('MainCtrl', ['$scope', function($scope){

		$scope.FirstCap = false;
		
		$scope.CheckWord = function (argument) {
			$scope.FirstCap = $scope.InputWord[0] === $scope.InputWord[0].toUpperCase();
		}

	}])