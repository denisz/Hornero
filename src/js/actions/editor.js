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

	preview : function () {
		
	},

	/**Панель настроек компонентов**/
	showFloatPanelWith : function (panelName, panelProps) {
		var props = {
			action 	: actions.EDITOR_SHOW_FLOAT_PANEL,
			source 	: sources.EDITOR,
			data	: {
				panelName 	: panelName,
				props 		: panelProps
			}
		};
		
		run(props)
	},

	hideFloatPanel : function () {
		var props = {
			action 	: actions.EDITOR_HIDE_FLOAT_PANEL,
			source 	: sources.EDITOR,
			data	: {}
		};
		
		run(props)
	},

	/**Основное меню редактора**/
	showAppMenu : function (model) {
		var props = {
			action 	: actions.EDITOR_SHOW_APP_MENU,
			source 	: sources.EDITOR,
			data	: {
				model : model
			}
		};
		
		run(props)
	},

	hideAppMenu : function () {
		var props = {
			action 	: actions.EDITOR_HIDE_APP_MENU,
			source 	: sources.EDITOR,
			data	: {}
		};
		
		run(props)
	},

	revert : function () {
		var props = {
			action : actions.EDITOR_REVERT,
			source : sources.EDITOR
		};
		
		run(props)
	}
}