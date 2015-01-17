var NavigationContextTypes = require('./NavigationContextTypes');
var _ = require('underscore');

module.exports = _.extend({}, NavigationContextTypes.childrenContext, {
	showView: function() {
		this.context.navigation.showView.apply(this.context.navigation, arguments);	
	},
	
	showViewFn: function() {
		var args = arguments;
		return function() {
			this.context.navigation.showView.apply(this.context.navigation, args);
		}.bind(this);
	},

	back : function () {
		this.context.navigation.back();	
	}
})