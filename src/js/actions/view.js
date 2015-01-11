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

	addWithSpec : function (displayName, spec, parentId) {
		var props = {
			source : sources.VIEW,
			action : actions.VIEW_ADD,
			data   : _.defaults(spec || {}, {
				displayName : displayName, 
				parentId 	: parentId
			})
		};

		run(props);	
	},

	addWithName : function (displayName, parentId) {
		var props = {
			source : sources.VIEW,
			action : actions.VIEW_ADD,
			data   : {
				displayName : displayName, 
				parentId 	: parentId
			}
		};

		run(props);	
	},


	remove : function (viewId) {
		var props = {
			source : sources.VIEW,
			action : actions.VIEW_REMOVE,
			data   : {
				id : viewId
			} 
		};

		run(props);	
	},

	update : function (spec) {
		var props = {
			source : sources.VIEW,
			action : actions.VIEW_UPDATE,
			data   : spec
		};

		run(props);
	}
}