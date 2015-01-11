/** @jsx React.DOM */

var React 	 = require('react/addons');
var Store 	 = require('../../../services/Store');
var Window   = require('../../views/Window');

var ViewMode = require('../../../constants/ModeView');
var AppMode  = require('../../../constants/ModeApp');

var ViewContextTypes = require('../../../mixins/ViewContextTypes');
var AppContextTypes  = require('../../../mixins/AppContextTypes');

module.exports = React.createClass({
	displayName : 'Canvas',
	mixins  	: [ 
		ViewContextTypes.parentContext, 
		AppContextTypes.childrenContext
	],

	getDefaultProps : function () {
		return {
			model : window.HelperModel.createInstance({ displayName : 'Window' })
		}
	},

	getChildContext: function() {
		return {
			canvas 		: this,
			mode  		: this.context.app.state.mode === AppMode.EDITOR ? ViewMode.EDIT : ViewMode.VIEW
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