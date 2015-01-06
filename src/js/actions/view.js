var constansts	= require('../constants'),
	actions 	= constansts.actions,
	sources 	= constansts.sources,
	run 		= require('../helpers/Action');

module.exports = {
	add : function (spec) {
		var props = {
			source : sources.VIEW,
			action : actions.VIEW_ADD,
			data   : spec
		};

		run(props);
	},

	addBySpec : function (displayName, spec, parentKey) {
		var props = {
			source : sources.VIEW,
			action : actions.VIEW_ADD,
			data   : _.defaults(spec || {}, {
				displayName : displayName, 
				parentKey 	: parentKey
			})
		};

		run(props);	
	},

	addByName : function (displayName, parentKey) {
		var props = {
			source : sources.VIEW,
			action : actions.VIEW_ADD,
			data   : {
				displayName : displayName, 
				parentKey 	: parentKey
			}
		};

		run(props);	
	},


	remove : function (viewKey) {
		var props = {
			source : sources.VIEW,
			action : actions.VIEW_REMOVE,
			data   : {
				key : viewKey
			} 
		};

		run(props);	
	},

	update : function (viewID) {
		var props = {
			source : sources.VIEW,
			action : actions.VIEW_UPDATE,
			data   : {
				id 	: viewID
			} 
		};

		run(props);
	}
}