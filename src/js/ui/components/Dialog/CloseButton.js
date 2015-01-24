/** @jsx React.DOM */

var _ 	= require('underscore'),
	UI 					= require('_ui'),
	React  				= require('react/addons'),
	ActionButton 		= require('./ActionButton'),
	classnames  		= require('classnames');

module.exports = React.createClass({
	displayName : "Dialog:CloseButton",
	
	render : function () {
		return (<UI.FlexBlock height="60px" className="b-dialog_header_item b-dialog_close">
					<ActionButton onTap="hideDialog">
						<UI.Icon icon="ios-arrow-up" />
					</ActionButton>
				</UI.FlexBlock>)
	}
})