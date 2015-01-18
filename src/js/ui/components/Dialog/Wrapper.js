/** @jsx React.DOM */

var _ 	= require('underscore'),
	UI 					= require('_ui'),
	React  				= require('react/addons'),
	classnames  		= require('classnames');

module.exports = React.createClass({

	render : function () {
		return (<UI.FlexLayout className="b-dialog_wrapper">
					{this.props.children}
				</UI.FlexLayout>)
	}
})