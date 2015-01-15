/** @jsx React.DOM */

var React 			= require('react/addons');
var UI 				= require('touchstonejs').UI;
var AppDispatcher 	= require('../../../services/AppDispatcher');
var Creater 		= require('../../../helpers/Creater');
var Actions 		= require('../../../actions').Editor;
var Composition 	= require('../composition');

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
				<Composition.Canvas />
				<Composition.FloatPanel />
				<Composition.ButtonAppMenu />					
			</UI.FlexLayout>
			)
	}
})