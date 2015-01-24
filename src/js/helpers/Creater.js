var _ 				= require('underscore'),
	Backbone		= require('Backbone'),
	React 			= require('react/addons'),
	Source 			= require('../mixins/Source'),
	States 			= require('../mixins/ViewStates'),
	Attributes 		= require('../mixins/Attributes'),

	IDialog 		= require('../mixins/IDialog'),

	ViewContextTypes 	= require('../mixins/ViewContextTypes'),
	DialogContextTypes 	= require('../mixins/DialogContextTypes');

module.exports = {
	createView  : function (spec) {
		spec = _.defaults(spec || {}, {
			mixins : []
		});

		spec.mixins = spec.mixins.concat([
			Source,
			Attributes,
			States,
			ViewContextTypes.childrenContext
		]);

        return React.createBackboneClass(spec);
	},

	createDialog 	: function (spec, size) {
		spec = _.defaults(spec || {}, {
			mixins 	: [],
			statics : {}
		});

		spec.statics.getSize = function () { return spec.size };
		
		spec.mixins = spec.mixins.concat([
			DialogContextTypes.parentContext,
			IDialog
		]);

		return React.createBackboneClass(spec)
	},

	createField 	: function (spec) {
		return React.createClass(spec)
	},

	createWindow 	: function (props) {
		props = _.defaults({}, props, { displayName : 'window' });
		
		return this.createComponent( this.createModel( props ) );
	},

	createModel : function (attributes, options) {
		return window.HelperModel.createInstance(attributes, options) 
	},

	createComponent : function (model) {
		var view 		= window.HelperView.getViewByName(model.get('displayName'));
		var factoryView = React.createFactory(view);

		return factoryView({ model : model, key : model.id })
	}
};