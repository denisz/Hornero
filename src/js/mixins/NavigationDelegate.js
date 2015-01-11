module.exports = {
	showView: function() {
		this.context.navigation.showView.apply(this.context.navigation, arguments);	
	},
	
	showViewFn: function() {
		var args = arguments;
		return function() {
			this.context.navigation.showView.apply(this.context.navigation, args);
		}.bind(this);
	}
}