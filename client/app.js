const angular = require('angular');
require('angular-ui-router');

angular
	.module('portfolio-2', ['ui.router'])
	.config(uiRouterSetup)

	uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
	function uiRouterSetup($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			template: '<home></home>'
		})
		.state('contact', {
			url: '/contact',
			template: '<contact></contact>'
		})
		.state('about', {
			url: '/about',
			template: '<about></about>'
		})
		.state('portfolio', {
			url: '/portfolio',
			template: '<portfolio></portfolio>'
		})
		.state('resume', {
			url: '/resume',
			template: '<resume></resume>'
		})
		.state('project1', {
			url: '/project1',
			template: '<project1></project1>'
		})
			.state('project2', {
			url: '/project2',
			template: '<project2></project2>'
		})
			.state('project3', {
			url: '/project3',
			template: '<project3></project3>'
		});


		$urlRouterProvider.otherwise('/');
}