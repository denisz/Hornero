/** @jsx React.DOM */

var React 	= require('react/addons');
var modeTableView = require('../constants/modeTableView');

var MAX_COLUMNS = 12;

module.exports = {

	_toggleModeAttributes : function () {
		var attrs = {};	

		mode  = this.props.mode;
	
		switch(mode) {
			case modeTableView.LIST: 
				attrs.xs = MAX_COLUMNS;
				attrs.md = MAX_COLUMNS;
			break;
			case modeTableView.TABLE : 
				attrs.xs = MAX_COLUMNS / this.props.numberColumns;
				attrs.md = MAX_COLUMNS / this.props.numberColumns;
			break;
		}

		attrs.className = 'm-' + mode.toLowerCase();

		return attrs;
	},

}