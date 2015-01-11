/** @jsx React.DOM */

var React 			= require('react/addons');
var UI 				= require('touchstonejs').UI;
var AppDispatcher 	= require('../../../services/AppDispatcher');
var Creater 		= require('../../../helpers/Creater');
var Actions 		= require('../../../actions').Editor;

var HUD 			= require('../HUD');

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
				<UI.FlexBlock>
					<HUD.Canvas />
					<HUD.PanelSettings />
					<HUD.ButtonAppMenu />					
				</UI.FlexBlock>
			</UI.FlexLayout>
			)
	}
})