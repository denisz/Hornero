var Actions = require('_actions').Editor;

module.exports = {
	getChildContext : function () {
		return {
			dialog : this
		}
	},

	hide : function () {
		Actions.hideDialog(this.keyName);
	}	
}