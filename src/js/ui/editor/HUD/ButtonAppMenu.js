/** @jsx React.DOM */

var React 			= require('react/addons');
var UI 				= require('touchstonejs').UI;
var HUD 			= require('../../components');
var Actions 		= require('../../../actions').Editor;

module.exports = React.createClass({
	displayName : 'ButtonAppMenu',

	handleClick : function () {
		Actions.showPanelSettingsWithModel();
	},

	render : function () {
		return (
				<HUD.ActionButton className="e-button_app_menu" onTap={Actions.showPanelSettingsWithModel}>+</HUD.ActionButton>
			)
	}
});