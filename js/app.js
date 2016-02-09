var App = /**
	*  Module
	*
	* Description
	*/
	angular.module('App', [])

	.controller('MainCtrl', ['$scope', function($scope){

		$scope.FirstCap = false;
		
		$scope.CheckWord = function (argument) {
			if ($scope.InputWord[0] === $scope.InputWord[0].toUpperCase()) {
				$scope.FirstCap = true;
			} else {
				$scope.FirstCap = false;
			}
		}

	}])