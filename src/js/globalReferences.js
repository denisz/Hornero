var _ 				= require('underscore');
var backbone 		= require('backbone');
var React 			= require('react/addons');
var ReactBackbone 	= require('react.backbone');
var Services 		= require('./services');
var Constants 		= require('./constants');
var Actions 		= require('./actions');
var Helpers 		= require('./helpers');
var ReactStyle  	= require('react-style');

var config = require('./config');

globalRefences = {
	_ 				: _,
	Config 			: config,
	Helpers 		: Helpers,
	Backbone 		: backbone,
	React 			: React,
	ReactBackbone 	: ReactBackbone,
	Constants 		: Constants,
	Actions 		: Actions,
	Services 		: Services,
	ReactStyle 		: ReactStyle
};

if (config.debug) {
	_.extend(window, globalRefences);	
}

module.exports = globalRefences;