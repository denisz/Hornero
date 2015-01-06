var _ 				= require('underscore'),
	Backbone		= require('Backbone'),
	ReactBackbone 	= require('react.backbone'),
	React 			= require('react/addons'),
	Source 			= require('../mixins/Source'),
	Attributes 		= require('../mixins/Attributes');

module.exports = {
	createClass  : function (spec) {
		spec = _.defaults(spec || {}, {
			mixins : []
		});

		spec.mixins = spec.mixins.concat([
			Source,
			Attributes
		]);

        return ReactBackbone.createBackboneClass(spec);
	},

	createFactory : function (view, _model) {
		var factory = React.createFactory(view);

		if ( _model ) {
			factory._model = _model;	
		}
		
		return factory;
	},

	createWindow 	: function (props) {
		var Model 		= HelperModel.getDefaultModel();
		var WindowView 	= window.HelperView.getViewByName('Window');
		
		return this.createComponent(WindowView, new Model(props));
	},

	createComponent : function (factoryView, model) {
		if (factoryView._model) {
			model = new factoryView._model(model);
		}

		if (!model || !(model instanceof Backbone.Model)) {
			var Model = HelperModel.getDefaultModel();
			model = new Model(model);
		}

		return factoryView({ model : model, key : model.get('key') })
	}
};