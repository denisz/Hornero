/** @jsx React.DOM */

var React 	 	= require('react/addons'),
	modes 		= require('../../constants/modeView');

module.exports = React.createClass({
	propsTypes : {
		mode : React.PropTypes.string.isRequire
	},

	isCanEdit : function () {
		return this.props.mode == modes.EDIT
	},

	render : function () {
		if (this.isCanEdit()) {
			return (<span>{this.props.children }</span>)
		}

		return null
	}
});