var Models  = require('../models');

var DEFAULT_MODEL_NAME 	= 'View';
var DEFAULT_MODEL = Models[DEFAULT_MODEL_NAME];

var HelperModel = {
	getModelByName : function (name) {
		return Models[name] || DEFAULT_MODEL
	},
	getDefaultModel : function () {
		return DEFAULT_MODEL
	}
};

window.HelperModel = HelperModel;

module.exports = HelperModel;