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
	},

	componentDidUpdate : function () {
		if (this.prepareValueByModel) {
			var value = this.prepareValueByModel(this.state);
			this.handleChangeValueModel(this.state.property, value);
		}
	},

	compositeChange : function (subProperty) {
		return {
			value 		  : this.state[subProperty],
			requestChange : _.bind(function (subProperty, value) {
				var obj = {};
				obj[subProperty] = value;	
				
				this.setState(obj);
			}, this, subProperty)
		}
	},
}
