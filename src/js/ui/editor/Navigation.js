/** @jsx React.DOM */

var _ 			= require('underscore'),
	React 		= require('react/addons'),
	Navigation  = require('../../mixins/Navigation');

module.exports = React.createClass({
	displayName : 'Layout',

	mixins 		: [ Navigation ],

	views 		: function () {
		return this.props.views
	},

	render : function () {
		return this.jsxNavigation();
	}
})