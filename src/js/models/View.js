
var Backbone 	= require('backbone');
var Sync   		= require('../mixins/Sync'); 
var Transform   = require('../mixins/Transform'); 
var _ 			= require('underscore');

var Model = Backbone.Model.extend(_.extend({}, Sync, Transform, {
	getDefaults : function () {
		return {
			id 	  : _.uniqueId('key_'),
		};
	},

	transform : {
		'subviews' : {
			model   : require('../models/Group'),
			options : {
				model : require('../models/Fabric')
			}
		},
		'styles'   : {
			model : require('../models/Style') 
		}
	}
}));

module.exports = Model;