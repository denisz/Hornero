var DialogContextTypes = require('./DialogContextTypes');
var _ = require('underscore');

module.exports = _.extend({}, DialogContextTypes.childrenContext, {
	hideDialog : function () {
		this.context.dialog.hide.apply(this.context.dialog, arguments);	
	},

	hideDialogFn : function () {
		var args = arguments;
		return function() {
			this.context.dialog.hide.apply(this.context.dialog, args);
		}.bind(this);
	},
})