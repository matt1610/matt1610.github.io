var App = /**
	*  Module
	*
	* Description
	*/
	angular.module('App', [])

	.controller('MainCtrl', ['$scope', function($scope){
		$scope.Projects = [
			{
				Name : 'Raptor Camera Project',
				Description : 'Firmware for Raptor cameras',
				Url : 'https://github.com/matt1610/RaptorFirmware',
				Image : 'Image url'
			},
			{
				Name : 'My Project',
				Description : 'Project Description',
				Url : 'Link to github page',
				Image : 'Image url'
			},
			{
				Name : 'My Project',
				Description : 'Project Description',
				Url : 'Link to github page',
				Image : 'Image url'
			},
			{
				Name : 'My Project',
				Description : 'Project Description',
				Url : 'Link to github page',
				Image : 'Image url'
			},
		]
	}])