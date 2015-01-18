/** @jsx React.DOM */

var _ 				= require('underscore');
var React 	 		= require('react/addons');
var UI 		 		= require('_ui');
var listenDispatcher= require('../../../mixins/ListenDispatcher');
var classnames 		= require('classnames');
var Dialogs 		= require('_constants').Dialogs;
var Actions 		= require('_constants').actions;

var views = {};
views[Dialogs.MARKDOWN_EDITOR] 	= require('../dialogs/MarkdownEditor');

module.exports = React.createClass(_.extend({}, listenDispatcher, {
	actionsDispatcher : [
		[Actions.EDITOR_HIDE_DIALOG, 		'hide'],
		[Actions.EDITOR_SHOW_DIALOG, 		'show'],
		[Actions.EDITOR_SHOW_MODAL_DIALOG, 	'showModal'],

	],

	getDefaultProps : function () {
		return {
			currentView : null,
			side   		: "top",
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

	show : function (payload) {
		var data = HelperPayload.getData(payload);

		this.setState({ 
			currentView 	: data.dialogName, 
			viewProps 		: data.props, 
			opened 			: true ,
			viewTransition 	: 'show-from-top'//вот это играет только когда панель уже открыта иначе анимации не будет
		})
	},

	hide : function (payload) {
		this.setState({ opened : false })
	},

	render : function () {
		var navigationOpts = _.pick(this.state, ['currentView', 'views', 'viewProps', 'viewTransition']);

		return (
				<UI.SideBar side={this.props.side} isOpened={this.state.opened} side={this.props.side} height={300}>
					<UI.Navigation {...navigationOpts}></UI.Navigation>
				</UI.SideBar>
			)
	}
}))
