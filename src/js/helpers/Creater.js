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