angular
	.module('portfolio-2')
	.service('projectsService', projectsService);

projectsService.$inject = ['$http'];

function ProjectsService($http) {
	const self = this;

	// self.loadAll = loadAll;

	// 	function loadAll() {
	// 	return $http.get('/api/portfolio');
	}

}