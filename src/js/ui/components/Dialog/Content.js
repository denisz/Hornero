/** @jsx React.DOM */

var _ 	= require('underscore'),
	UI 					= require('_ui'),
	React  				= require('react/addons'),
	classnames  		= require('classnames');

module.exports = React.createClass({
	displayName : "Dialog:Content",
	
	render : function () {
		var className = classnames("b-dialog_content", this.props.className);

		return (<UI.FlexBlock {...this.props} className={className}>{this.props.children}</UI.FlexBlock>)
	}
})