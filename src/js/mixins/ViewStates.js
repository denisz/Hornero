module.exports = {
	getInitialRequireState : function () {
		return {
			mode  		: this.context && this.context.mode,
			disabled  	: false
		}
	},

	getInitialState : function () {
		return this.getInitialRequireState();
	}
}