/** @jsx React.DOM */

var _ = require('underscore');
var React 	 	= require('react/addons');
var Store 	 	= require('_store');
var Window   	= require('../../views/Window');
var UI 		 	= require('_ui');
var classnames 	= require('classnames');

//константы
var ViewMode = require('_constants').modeView;
var AppMode  = require('_constants').modeApp;
var Viewports= require('_constants').viewports; 
var Devices  = require('_constants').devices;

// контексты
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
			viewport    	: Viewports.PHONE, //Viewports.DESKTOP,
			device 			: Devices.IPHONE5, //Devices.MAC,
			model 			: window.HelperModel.createInstance({ displayName : 'Window' })
		}
	},

	getInitialState : function () {
		return {
			viewport 	: this.props.viewport,
			device 		: this.props.device
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

	componentWillReceiveProps : function (nextProps) {
		this.setState({
			viewport 	: nextProps.viewport,
			device 		: nextProps.device
		})
	},

	render : function () {
		var className = classnames("canvas-wrapper", _.object([
				[('m-' + this.state.viewport).toLowerCase(), 	device.desktop()],
				[('m-' + this.state.device).toLowerCase(),		device.desktop()]
			]));

		return (
			<UI.FlexBlock scrollable className={className}>
				<Window model={this.props.model}></Window>
			</UI.FlexBlock>)
	}
})