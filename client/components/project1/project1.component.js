const controller = require('./project1.controller.js');
const template = require('./project1.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('portfolio-2')
	.component('project1', component);