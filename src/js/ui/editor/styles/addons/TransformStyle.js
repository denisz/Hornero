var _ = require('underscore');
var utils = require('_utils');

var DEFINES = {
	border : {
		regexp 		: /(\d+)px (\w+) (#(?:[0-9a-fA-F]{3}){1,2})/,
		property 	: ['size', 'style', 'color']
	}
};

var TEMPLATES = {
	border : "{size}px {style} {color}" 
};

module.exports = {
	parse : function (key, value) {
		var result  = {},
			params  = DEFINES[key],
			matches = value.match(params.regexp);
		
		for (var i = 0, l = params.property.length; i < l; i++) {
			result[params.property[i]] = matches[i+1];
		}

		return result;
	},
	serialize : function (key, values) {
		var tmpl = TEMPLATES[key];
		return utils.substitute( tmpl, values);
	}
}