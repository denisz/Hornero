
var Backbone 	= require('backbone');
var ISync   	= require('../mixins/Sync'); 
var IStyles 	= require('../mixins/Styles')
var IProxy 		= require('../mixins/Proxy')
var ISubviews 	= require('../mixins/Subviews')
var _ 			= require('underscore');


var Model = Backbone.Model.extend(_.extend({}, ISync, IStyles, ISubviews, IProxy, {
	defaults : function () {
		return {
			key 	  : _.uniqueId('key_'),
		};
	},

	initialize : function () {
		this._initializeStyles();
		this._initializeSubviews();
	},

	toJSON : function () {
		var data = _.clone(this.attributes);

		this._toJSONSubview(data);
		this._toJSONStyles(data);

		return data
	}
}));

module.exports = Model;