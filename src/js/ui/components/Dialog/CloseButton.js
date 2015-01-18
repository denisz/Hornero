/** @jsx React.DOM */

var _ 	= require('underscore'),
	UI 					= require('_ui'),
	React  				= require('react/addons'),
	ActionButton 		= require('./ActionButton'),
	classnames  		= require('classnames');

module.exports = React.createClass({

	render : function () {
		return (<UI.FlexBlock className="b-dialog_close">
					<ActionButton>
						{this.props.children}
					</ActionButton>
				</UI.FlexBlock>)
	}
})