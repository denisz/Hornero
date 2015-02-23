var Backbone 	= require('backbone');
var _ 			= require('underscore');
var Transform   = require('../mixins/StylesTransform');

module.exports = Backbone.Model.extend(_.extend({}, Transform, {
	transform : {
		border : function (value, attrs) {
			attrs['border-top']  = value;
			attrs['border-left']  = value;
			attrs['border-right']  = value;
			attrs['border-bottom']  = value;

			delete attrs['border'];
			
			return attrs;
		}
	}
}))