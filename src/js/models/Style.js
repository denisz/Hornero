var Backbone 	= require('backbone');
var _ 			= require('underscore');
var Transform   = require('../mixins/StylesTransform');

module.exports = Backbone.Model.extend(_.extend({}, Transform, {
	transform : {
		border : function (value, attrs) {
			attrs['borderTop']  = value;
			attrs['borderLeft']  = value;
			attrs['borderRight']  = value;
			attrs['borderBottom']  = value;

			delete attrs['border'];
			
			return attrs;
		}
	}
}))