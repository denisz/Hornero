/** @jsx React.DOM */

var React 			= require('react/addons');
var _ 				= require('underscore');
var UI 				= require('touchstonejs').UI;
var listenDispatcher= require('../../../mixins/ListenDispatcher');
var Actions 		= require('../../../constants').actions;
var Components 		= require('../../components');
var views 			= require('../PanelSettings');

var Bootstrap = require('react-bootstrap');

module.exports = React.createClass(_.extend( {}, listenDispatcher, {
	displayName  	: 'PanelSettings',
	
	actionsDispatcher : [
		[Actions.EDITOR_SHOW_PANEL_SETTINGS, 'show'],
		[Actions.EDITOR_HIDE_PANEL_SETTINGS, 'hide']
	],

	getDefaultProps : function () {
		return {
			side  : "right",
			views : views			
		}
	},

	getInitialState : function () {
		return {
			opened : false
		}
	},

	componentDidMount : function () {
		this.listenDispatcher()
	},

	componentWillUnmount : function () {
		this.stopListeningDispatcher()
	},

	componentWillEnter : function () {
		console.log('enter')
	},

	handleOpened : function () {
		console.log('opened');
	},

	handleClosed : function () {
		console.log('closed');
	},

	show : function () {
		this.setState({ opened : !this.state.opened })
	},

	hide : function () {
		this.setState({ opened : false })
	},

	render : function () {
		return (
				<Components.SideBar side={this.props.side} isOpened={this.state.opened} onOpened={this.handleOpened} onClosed={this.handleClosed}>
					<Components.Navigation views={this.props.views} currentView="Styles"></Components.Navigation>
				</Components.SideBar>
			)
	}
}));