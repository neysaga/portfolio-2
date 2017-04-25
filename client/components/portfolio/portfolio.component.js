const controller = require('./portfolio.controller.js');
const template = require('./portfolio.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('portfolio-2')
	.component('portfolio', component);