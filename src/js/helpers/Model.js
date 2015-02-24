var _ = require('underscore');

var Models  			= require('../models');
var defaultsProperties 	= require('../settings/properties');
var Common 	 			= require('../utils/common'); 
var constants 			= require('../constants');

var DEFAULT_MODEL_NAME 	= 'View';
var DEFAULT_MODEL 		= Models[DEFAULT_MODEL_NAME];

var HelperModel = {
	getModelByName : function (name) {
		return Models[name] || DEFAULT_MODEL
	},

	getDefaultModel : function () {
		return DEFAULT_MODEL
	},

	createInstance : function (attributes, options) {
		var displayName, modelPrototype, attrs;

		attrs = attributes || {};
	    options || (options = {});

		displayName = attrs.displayName;	

		attrs 			= _.defaults({}, attrs, defaultsProperties[displayName]);
		modelPrototype 	= HelperModel.getModelByName(displayName); 

		return new modelPrototype(attrs, options);
	},

	//рекурсивный поиск элемента
	//ускорить бинарный деревом
	getById : function (id, modelOrModels) {
		var subviews = modelOrModels.getSubviews();
		
		return modelOrModels.id == id ? modelOrModels : Common.findResult(subviews.models, this.getById.bind(this, id));
	},

	serialize : function (model, formatSerialize) {
		var format 	= constants.formatSerialize,
			result 	= null;

		switch(formatSerialize) {

			case format.JSON : 
				result = model.toJSON();
			break;

			case format.XML :
				var json = model.toJSON();
				result = json;//добавить обработчик xml
			break;	
		}

		return result;
	}
};

window.HelperModel = HelperModel;

module.exports = HelperModel;