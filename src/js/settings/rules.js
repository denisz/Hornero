var Rules = require('../helpers/Rules');

module.exports = {
	Window 	: function () {

	},
	Spinner : function () {

	},
	Empty 	: function () {
		styles 		: Rules.modelWith,
		subviews 	: Rules.collectionSetWithProperties({ displyName : [], })
	}	
}