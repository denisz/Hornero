/** @jsx React.DOM */

var React 	 	= require('react/addons');
var Devices  	= require('_constants').devices;
var Mockup 		= require('../mockup/');

module.exports = React.createClass({
	getDefaultProps : function () {
		return {
			device : Devices.MAC,
			color  : 'white'
		}
	},

	getInitialState : function () {
		return {
			device : this.props.device,
			color  : this.props.color
		}
	},

	componentWillReceiveProps : function (nextProps) {
		this.setState({
			device 		: nextProps.device,
			color 		: nextProps.color
		})
	},

	render : function () {
		var ComponentClass = Mockup[this.state.device.toLowerCase()];

		if (ComponentClass) {
			return (<ComponentClass />);	
		}

		return null;	
	}
})