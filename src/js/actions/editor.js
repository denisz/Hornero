var constansts	= require('../constants'),
	actions 	= constansts.actions,
	sources 	= constansts.sources,
	run 		= require('../helpers/Action');

module.exports = {
	load : function () {
		var props = {
			action : actions.EDITOR_LOAD,
			source : sources.EDITOR
		};
		
		run(props)
	},

	save : function () {
		
	},

	revert : function () {
		var props = {
			action : actions.EDITOR_REVERT,
			source : sources.EDITOR
		};
		
		run(props)
	}
}