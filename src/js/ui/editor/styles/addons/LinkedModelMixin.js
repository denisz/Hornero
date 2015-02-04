/** @jsx React.DOM */

var React 	= require('react/addons');
var _  		= require('underscore');


module.exports = {
	handleChangeValueModel : function (property, newValue) {
		var model = this.getModel();
		model.set(property, newValue);
	},

	linkState : function (property) {
		var model = this.getModel();

		return {
	      value 		: model.get(property),
	      requestChange : _.bind(this.handleChangeValueModel, this, property)
	    }
	}
}
