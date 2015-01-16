/** @jsx React.DOM */

var React 			= require('react/addons');
var _ 				= require('underscore');
var UI 				= require('_ui');
var listenDispatcher= require('../../../mixins/ListenDispatcher');
var constants 		= require('_constants');
var Actions 		= constants.actions;
var FloatPanel 		= constants.floatPanel;
var BS 				= require('react-bootstrap');

var views = {};
views[FloatPanel.SETTINGS] 	= require('../bricks/Settings');
views[FloatPanel.LIBRARY] 	= require('../bricks/Library');

module.exports = React.createClass(_.extend( {}, listenDispatcher, {
	displayName  	: 'PanelSettings',
	
	actionsDispatcher : [
		[Actions.EDITOR_SHOW_FLOAT_PANEL, 'show'],
		[Actions.EDITOR_HIDE_FLOAT_PANEL, 'hide']
	],

	getDefaultProps : function () {
		return {
			currentView : null,
			side   		: "right",
			views 		: views
		}
	},

	getInitialState : function () {
		return {
			views  			: this.props.views,	
			currentView 	: this.props.currentView,
			viewProps 		: null,
			opened  		: false
		}
	},

	componentDidMount : function () {
		this.listenDispatcher()
	},

	componentWillUnmount : function () {
		this.stopListeningDispatcher()
	},

	handleOpened : function () {
		console.log('opened');
	},

	handleClosed : function () {
		console.log('closed');
	},

	show : function (payload) {
		var data = HelperPayload.getData(payload);

		this.setState({ 
			currentView : data.panelName, 
			viewProps 	: data.props, 
			opened 		: true ,
			viewTransition 	: 'show-from-right'
		})
	},

	hide : function (payload) {
		this.setState({ opened : false })
	},

	render : function () {
		var navigationOpts = _.pick(this.state, ['currentView', 'views', 'viewProps', 'viewTransition']);

		return (
				<UI.SideBar side={this.props.side} isOpened={this.state.opened} onOpened={this.handleOpened} onClosed={this.handleClosed}>
					<UI.Navigation {...navigationOpts}></UI.Navigation>
				</UI.SideBar>
			)
	}
}));