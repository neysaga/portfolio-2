const controller = require('./project2.controller.js');
const template = require('./project2.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('portfolio-2')
	.component('project2', component);