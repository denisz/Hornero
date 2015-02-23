/** @jsx React.DOM */

var React 	 		= require('react/addons');

module.exports = React.createClass({
	getDefaultProps : function () {
		return {
			label : null
		}
	},

	render : function () {
		return <div className="field-header">{this.props.label}</div>
	}
});