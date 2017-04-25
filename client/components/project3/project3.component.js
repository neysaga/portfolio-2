const controller = require('./project3.controller.js');
const template = require('./project3.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('portfolio-2')
	.component('project3', component);