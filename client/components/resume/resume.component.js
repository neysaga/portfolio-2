const controller = require('./resume.controller.js');
const template = require('./resume.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('portfolio-2')
	.component('resume', component);