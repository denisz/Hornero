/** @jsx React.DOM */

var _ 	= require('underscore'),
	UI 					= require('_ui'),
	React  				= require('react/addons'),
	classnames  		= require('classnames');

module.exports = React.createClass({
	displayName : "Dialog:Title",
	
	render : function () {
		return (<UI.FlexBlock className="b-dialog_title">
					{this.props.children}
				</UI.FlexBlock>)
	}
})