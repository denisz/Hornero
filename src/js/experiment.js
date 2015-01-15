/** @jsx React.DOM */

var _ 			= require('underscore'),
	React 		= require('react/addons');

module.exports = React.createClass({
	getDefaultProps : function () {
		return {
			text : 'Hi!'
		}
	},

	getInitialState : function () {
		return {
			text : this.props.text
		}
	},

	handleClick : function () {
		console.log('click');

		this.setState({
			text : 'hihi'
		});

	},

	componentWillReceiveProps : function (props) {
		this.setState({
			text : props.text
		})

	},

	render : function () {
		console.log('render test', this.state.text);

		return (<div onClick={this.handleClick}>{this.state.text}</div>)
	}
})

