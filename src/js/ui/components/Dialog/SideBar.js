/** @jsx React.DOM */

var _ 	= require('underscore'),
	UI 					= require('_ui'),
	React  				= require('react/addons'),
	classnames  		= require('classnames');

module.exports = React.createClass({
	displayName : "Dialog:SideBar",
	
	render : function () {
		return (<UI.SideBar side="top" className="b-dialog_sidebar">
					{this.props.children}
				</UI.FlexBlock>)
	}
})