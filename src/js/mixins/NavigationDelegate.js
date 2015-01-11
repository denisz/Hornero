module.exports = {
	showView: function() {
		this.props.navigation.showView.apply(this.props.navigation, arguments);
	},
	
	showViewFn: function() {
		var args = arguments;
		return function() {
			this.props.navigation.showView.apply(this.props.navigation, args);
		}.bind(this);
	}
}