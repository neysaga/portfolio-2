const controller = require('./about.controller.js');
const template = require('./about.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('portfolio-2')
	.component('about', component);
