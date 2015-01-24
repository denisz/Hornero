/** @jsx React.DOM */

var _ 	= require('underscore'),
	UI 					= require('_ui'),
	React  				= require('react/addons'),
	classnames  		= require('classnames');

module.exports = React.createClass({
	displayName : "Dialog:Panel",
	
	render : function () {
		var className = classnames("b-dialog_panel", this.props.className);

		return (<UI.FlexLayout direction="column" width="60px" {...this.props} className={className}>
					{this.props.children}
				</UI.FlexLayout>)
	}
})