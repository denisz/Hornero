/** @jsx React.DOM */

var React 			= require('react/addons');
var UI 				= require('_ui');
var Actions 		= require('_actions').Editor;
var floatPanel 		= require('_constants').floatPanel;

module.exports = React.createClass({
	displayName : 'ButtonAppMenu',

	handleClick : function () {
		Actions.showDialog();
	},

	render : function () {
		return (
				<UI.NavigationAction className="e-button_app_menu" onTap={this.handleClick}>+</UI.NavigationAction>
			)
	}
});