var constansts	= require('../constants'),
	actions 	= constansts.actions,
	sources 	= constansts.sources,
	run 		= require('../helpers/Action');

module.exports = {
	parse : function () {
		var props = {
			action : actions.MODEL_PARSE,
			source : sources.MODEL
		};

		run(props)
	}
}