var App = /**
	*  Module
	*
	* Description
	*/
	angular.module('App', [])

	.controller('MainCtrl', ['$scope', function($scope){

		$scope.FirstCap = false;
		$scope.FirstCap = '';
		$scope.ShiftKey = false;
		
		$scope.CheckWord = function (argument) {
			$scope.FirstCap = $scope.InputWord[0] === $scope.InputWord[0].toUpperCase();
		}

		document.addEventListener('keydown', function (evt) {
			$scope.ShiftKey = evt.shiftKey;
		});

	}])