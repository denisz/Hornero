/** @jsx React.DOM */

var React 		= require('react/addons');
var SVG 		= require('react-svg');

module.exports = React.createClass({
	displayName : 'Ipad mockup',

	render  	: function () {
		return (<SVG path="/svg/ipad.svg" className="e-mockup" />)
	}
});