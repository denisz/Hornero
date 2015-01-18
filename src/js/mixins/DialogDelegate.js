module.exports = {
	hideDialog : function () {
		this.context.dialog.hide.apply(this.context.dialog, arguments);	
	},

	hideDialogFn : function () {
		var args = arguments;
		return function() {
			this.context.dialog.hide.apply(this.context.dialog, args);
		}.bind(this);
	},
}