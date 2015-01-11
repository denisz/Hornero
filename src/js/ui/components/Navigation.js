/** @jsx React.DOM */

var _ 			= require('underscore'),
	React 		= require('react/addons'),
	Navigation  = require('../../mixins/Navigation');

module.exports = React.createClass({
	displayName : 'Navigation',

	mixins 		: [ Navigation ],

	propTypes: {
		viewTransition  : React.PropTypes.string,
		currentView 	: React.PropTypes.string,
		views 			: React.PropTypes.object.isRequired
	},

	getInitialState : function () {
		return  _.defaults( {
			currentView 	: this.props.currentView,
			viewTransition  : this.props.viewTransition
		}, this.getInitialStateNavigation() )
	},

	views 		: function () {
		return this.props.views
	},

	render : function () {
		return this.jsxNavigation();
	}
})