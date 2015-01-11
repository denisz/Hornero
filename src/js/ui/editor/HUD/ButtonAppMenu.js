/** @jsx React.DOM */

var React 			= require('react/addons');
var UI 				= require('touchstonejs').UI;
var Actions 		= require('../../../actions').Editor;

module.exports = React.createClass({
	displayName : 'ButtonAppMenu',

	handleClick : function () {
		Actions.showPanelSettingsWithModel();
	},

	render : function () {
		return (
				<div className="e-button_app_menu" onClick={this.handleClick}> Button Menu</div>
			)
	}
});