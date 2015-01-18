/** @jsx React.DOM */

var _ 	= require('underscore'),
	UI 					= require('_ui'),
	React  				= require('react/addons'),
	classnames  		= require('classnames');

module.exports = React.createClass({

	render : function () {
		var title = this.props.title ? <div className="action-button-label">{this.props.label}</div> : null;

		return (<UI.FlexBlock className="b-dialog_title">
					{title}
					{this.props.children}
				</UI.FlexBlock>)
	}
})