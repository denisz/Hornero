var _ = require('underscore');


var transform = function (value) {
	var obj = {};
	obj['value'] = value;
	obj['label'] = value;

	return obj;
};

module.exports = function (value) {
	if (_.isArray(value)) {
		return _.map(value, transform);
	}

	return transform(value);
}