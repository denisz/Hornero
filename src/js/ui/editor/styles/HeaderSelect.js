/** @jsx React.DOM */

var _ 				= require('underscore');
var React 	 		= require('react/addons');
var UI 		 		= require('_ui');

var classnames 		= require('classnames');


module.exports = React.createClass({
	getDefaultProps : function () {
		return {
			label 	: null,
			options : []
		}
	},

	render : function () {
		return <div className="field-header">
			{this.props.label}
		</div>
	}
});