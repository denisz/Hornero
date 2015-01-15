/** @jsx React.DOM */

var React 	= require('react/addons');
var modeTableView = require('../constants/modeTableView');

var MAX_WIDTH = 12;

module.exports = {

	_toggleModeAttributes : function () {
		var attrs = {};	

		mode  = this.props.mode;
	
		switch(mode) {
			case modeTableView.LIST: 
				attrs.xs = MAX_WIDTH;
				attrs.md = MAX_WIDTH;
			break;
			case modeTableView.TABLE : 
				attrs.xs = MAX_WIDTH / this.props.numberColumns;
				attrs.md = MAX_WIDTH / this.props.numberColumns;
			break;
		}

		attrs.className = 'm-' + mode;

		return attrs;
	},

}