/** @jsx React.DOM */

var _ 	= require('underscore'),
	UI 					= require('_ui'),
	React  				= require('react/addons'),
	ActionButton 		= require('./ActionButton'),
	classnames  		= require('classnames');

module.exports = React.createClass({
	displayName : "Dialog:HeaderItem",

	render : function () {
		var className = classnames("b-dialog_header_item", this.props.className);
		
		return (<UI.FlexBlock  {...this.props} height="60px" className={className}>
					<ActionButton onTap={this.props.onTap}>
						{this.props.children}
					</ActionButton>
				</UI.FlexBlock>)
	}
})