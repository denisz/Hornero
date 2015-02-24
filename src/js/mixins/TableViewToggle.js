/** @jsx React.DOM */

var React 			= require('react/addons');
var modeTableView 	= require('../constants/modeTableView');
var classnames  	= require('classnames');

var MAX_COLUMNS = 12;

module.exports = {

	_toggleModeAttributes : function (attrs) {
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

		attrs.className = classnames('m-' + mode.toLowerCase(), attrs.className);

		return attrs;
	},

}