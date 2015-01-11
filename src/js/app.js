/** @jsx React.DOM */

var _ = require('underscore');
var React = require('react/addons');

var classnames  = require('classnames');
var Touchstone  = require('touchstonejs');
var Navigation 	= require('./mixins/Navigation');

var config 		= require('./config');
var utils 		= require('./utils');

var Services 	= require('./services');
var Helpers 	= require('./helpers');

var views 		= require('./ui/editor/Pages');

require('./globalReferences');

var App = React.createClass({
	mixins : [ Navigation ],

	views: function () {
		return views;
	}, 

	getInitialState : function () {
		return  _.defaults( {
			currentView : 'Workspace',
			online 		: true,
			isNativeApp : utils.common.isCordova()
		}, this.getInitialStateNavigation() )
	},

	render : function () {
		var appWrapperClassName = classnames({
			'app-wrapper': true,
			'is-native-app': this.state.isNativeApp
		});

		var navigation = this.jsxNavigation();

		return (
			<div className={appWrapperClassName}>
				<div className="device-silhouette">
					<div className="view-wrapper">{navigation}</div>
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
