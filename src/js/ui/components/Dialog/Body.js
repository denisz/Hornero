/** @jsx React.DOM */

var _ 	= require('underscore'),
	UI 					= require('_ui'),
	React  				= require('react/addons'),
	classnames  		= require('classnames');

module.exports = React.createClass({

	render : function () {
		return (<UI.FlexBlock className="b-dialog_body">
					{this.props.children}
				</UI.FlexBlock>)
	}
})