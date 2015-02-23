/** @jsx React.DOM */

module.exports = function (min, max, step) {
	var results = [];
	step = step || 1;

	for (var i = min, l = max; i < l; i += step) {
		results.push(<option value={i}>{i}</option>);
	}

	return results;
};