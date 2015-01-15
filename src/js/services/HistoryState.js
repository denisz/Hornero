var dispatcher 	= require('./AppDispatcher'),
	constants 	= require('../constants'),
	_ 			= require('underscore'),
	config 		= require('../config'),
	Backbone 	= require('backbone'),
	actions 	= constants.actions,
	sources 	= constants.sources,
	listenDispatcher = require('../mixins/ListenDispatcher');

var	Mock = require('../mock/tree');

module.exports = Backbone.Model.extend({
	
});