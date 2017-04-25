const controller = require('./contact.controller.js');
const template = require('./contact.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('portfolio-2')
	.component('contact', component);