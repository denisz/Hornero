/** @jsx React.DOM */

var React 			= require('react/addons');
var UI 				= require('touchstonejs').UI;
var HUD 			= require('../../components');
var Actions 		= require('../../../actions').Editor;
var floatPanel 		= require('../../../constants/floatPanel');

module.exports = React.createClass({
	displayName : 'ButtonAppMenu',

	handleClick : function () {
		Actions.showFloatPanelWith(floatPanel.SETTINGS);
	},

	render : function () {
		return (
				<HUD.ActionButton className="e-button_app_menu" onTap={this.handleClick}>+</HUD.ActionButton>
			)
	}
});