/** @jsx React.DOM */

var React 		= require('react/addons');
var SVG 		= require('react-svg');

module.exports = React.createClass({
	displayName : 'Iphone mockup',

	render  	: function () {
		return (<SVG path="/svg/iphone.svg" className="e-mockup" />)
	}
});