var Backbone = require('backbone');

var findResult = function (collection, method, args) {
	var models = collection.models, result = false;

	for (var i = 0, l = models.length; i < l; i++) {
		result = models[i][method].apply(models[i], args);
		if (result) { break }
	} 

	return result;
};

module.exports = Backbone.Collection.extend({
	getViewByCid : function (cid) {
		return findResult(this, 'getViewByCid', [cid])
	},
	
	getViewByKey : function (cid) {
		return findResult(this, 'getViewByKey', [cid])
	},
});