var FluxDispatcher  = require('react-dispatcher');
var config 			= require('../config'); 
var instanceDispatcher = new FluxDispatcher();

if (config.debug) {
	window.Dispatcher = instanceDispatcher;
}

module.exports = instanceDispatcher;