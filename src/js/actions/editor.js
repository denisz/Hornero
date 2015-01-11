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

	/**Панель настроек компонентов**/
	showPanelSettingsWithModel : function (model, filter) {
		var props = {
			action 	: actions.EDITOR_SHOW_PANEL_SETTINGS,
			source 	: sources.EDITOR,
			data	: {
				model : model,
				filter: filter
			}
		};
		
		run(props)
	},

	hidePanelSettingsWithModel : function () {
		var props = {
			action 	: actions.EDITOR_HIDE_PANEL_SETTINGS,
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