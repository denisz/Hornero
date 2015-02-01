/** @jsx React.DOM */

var React 	 	= require('react/addons'),
	modes 		= require('_constants').modeView;

module.exports = React.createClass({
	propsTypes : {
		mode : React.PropTypes.string.isRequired
	},

	isCanEdit : function () {
		return this.props.mode === modes.EDIT
	},

	render : function () {
		var build = null;

		if (this.isCanEdit()) {
			build = (<span>{this.props.children}</span>)
		}

		return build
	}
});