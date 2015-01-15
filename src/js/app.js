/** @jsx React.DOM */

var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react/addons');

var classnames  = require('classnames');
var Touchstone  = require('touchstonejs');
var AppContextTypes  = require('./mixins/AppContextTypes');

var config 		= require('./config');
var utils 		= require('./utils');

var Services 	= require('./services');
var Helpers 	= require('./helpers');

var views 		= require('./ui/editor/layout');
var UI   		= require('_ui');

require('./globalReferences');

var App = React.createClass({
	mixins : [ AppContextTypes.parentContext ],

	getInitialState : function () {
		return  {
			currentView : 'Workspace',
			online 		: true,
			isNativeApp : utils.common.isCordova()
		}
	},

	getChildContext: function() {
		return {
			app : this
		}
	},

	render : function () {
		var appWrapperClassName = classnames({
			'app-wrapper' 	: true,
			'is-native-app' : this.state.isNativeApp
		});

		return (
			<div className={appWrapperClassName}>
				<div className="device-silhouette">
					<UI.Navigation views={views} currentView={this.state.currentView} />
				</div>
			</div>)
	}
})


function onDesctopReady() {
	var app = React.render(<App />, document.getElementById('app'));

	if (config.debug) {
		window.App = app;
	}
}

function onDeviceReady() {
	StatusBar.styleDefault();
	startApp();
}

if (utils.common.isCordova()) {
	document.addEventListener('deviceready', onDeviceReady, false);
} else {
	utils.ready(onDesctopReady)
}
