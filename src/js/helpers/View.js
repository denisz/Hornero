var	Views  = require('../ui').Views;

var DEFAULT_VIEW_NAME 	= 'Empty';
var DEFAULT_VIEW = Views[DEFAULT_VIEW_NAME];

var HelperView = {
	getViewByName : function (name) {
		return Views[name] || DEFAULT_VIEW
	},
	getDefaultView : function () {
		return DEFAULT_VIEW
	}
};

window.HelperView = HelperView;

module.exports = HelperView;