var _ = require('underscore');

module.exports = {
	isCordova : function () {
		return (typeof cordova !== 'undefined') ? true : false
	},

	findResult : function (arr, iteratee) {
		var result = false;

		for (var i = 0, l = arr.length; i < l; i++) {
			result = iteratee(arr[i]);
			if (result) { break }
		} 

		return result;
	},

	noop : function () {},
	null : function () { return null},

	filterMatches : function (items, matches) {
		var results = [];

		for (var i = 0, l = items.length; i < l; i++) {
			if (matches(items[i])) {
				results.push(items[i])	
			}
		}

		return results;
	},

	createObject : function (key, value) {
		
	},

	createMatches : function (attrs, strict) {
		var pairs = _.pairs(attrs), length = pairs.length;

		return function (obj) {
			if (obj == null) return !length;

			obj = new Object(obj);

			for (var i = 0; i < length; i++) {
				var pair = pairs[i], key = pair[0];

				if ( !pair[1](obj[key], key) || !(key in obj) ) {
					return false;
				}
			}

			return true;
		}
	}
}