var Backbone = require('backbone');

module.exports = Backbone.Collection.extend({
	getViewByCid : function (cid) {
		return this.find(function (view) { return view.getViewByCid(cid) })
	},
	
	getViewByKey : function (cid) {
		return this.find(function (view) { return view.getViewByKey(cid) })
	},
});