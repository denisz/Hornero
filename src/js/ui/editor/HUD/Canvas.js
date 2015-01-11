/** @jsx React.DOM */

var React 	 = require('react/addons');
var Store 	 = require('../../../services/Store');
var Window   = require('../../views/Window');

module.exports = React.createClass({
	displayName : 'Canvas',

	getDefaultProps : function () {
		return {
			model : window.HelperModel.createInstance({ displayName : 'Window' })
		}
	},

	componentDidMount : function () {
		Store.registerModel( this.props.model );
	},

	componentWillUnmount : function () {
		Store.unregisterModel( this.props.model );
	},

	render : function () {
		return (<Window model={this.props.model}></Window>)
	}
})