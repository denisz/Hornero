/** @jsx React.DOM */

var _ 	= require('underscore'),
	UI 					= require('_ui'),
	React  				= require('react/addons'),
	ActionButton 		= require('./ActionButton'),
	classnames  		= require('classnames');

module.exports = React.createClass({
	displayName : "Dialog:CloseButton",
	
	render : function () {
		return (<UI.FlexBlock height="60px" className="b-dialog_header_item">
					<ActionButton onTap="hideDialog">
						<UI.Icon icon="android-close" />
					</ActionButton>
				</UI.FlexBlock>)
	}
})