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

	addBySpec : function (displayName, spec, parentID) {
		var props = {
			source : sources.VIEW,
			action : actions.VIEW_ADD,
			data   : _.defaults(spec || {}, {
				displayName : displayName, 
				parentID 	: parentID
			})
		};

		run(props);	
	},

	addByName : function (displayName, parentID) {
		var props = {
			source : sources.VIEW,
			action : actions.VIEW_ADD,
			data   : {
				displayName : displayName, 
				parentID 	: parentID
			}
		};

		run(props);	
	},


	remove : function (viewCid) {
		var props = {
			source : sources.VIEW,
			action : actions.VIEW_REMOVE,
			data   : {
				cid : viewCid
			} 
		};

		run(props);	
	},

	removeByKey : function (viewKey) {
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