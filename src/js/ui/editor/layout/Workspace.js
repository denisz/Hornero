/** @jsx React.DOM */

var React 			= require('react/addons');
var UI 				= require('_ui');
var AppDispatcher 	= require('_services').AppDispatcher;
var Creater 		= require('../../../helpers/Creater');
var Actions 		= require('_actions').Editor;
var Composition 	= require('../composition');

var ViewMode 		= require('_constants').modeView;

module.exports =  React.createClass({
	displayName : 'Workspace',

	getInitialState : function () {
		return {}
	},

	componentDidMount : function () {
		Actions.load();
	},

	render : function () {
		return (
			<UI.FlexLayout className={this.props.viewClassName}>
				<Composition.Device />
				<Composition.Canvas mode={ViewMode.EDIT}/>
				<Composition.FloatPanel />
				<Composition.ButtonAppMenu />					
			</UI.FlexLayout>
			)
	}
})