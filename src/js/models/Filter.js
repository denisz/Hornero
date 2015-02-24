var Backbone = require('backbone');
var _ = require('underscore');

module.exports = Backbone.Model.extend({

}, {
	oneOf : function (array) {
		return _.contains.bind(_, array);
	},

	isTrue : function (value) {
		return  value === true;
	},

	isEquals : function (predicate) {
		return function (value) { return value === predicate };
	},

	isFalse : function (value) {
		return  value === false;
	}

});