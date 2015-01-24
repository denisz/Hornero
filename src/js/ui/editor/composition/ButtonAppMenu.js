/** @jsx React.DOM */

var React 			= require('react/addons');
var UI 				= require('_ui');
var Actions 		= require('_actions').Editor;
var dialogs 		= require('_constants').dialogs;

module.exports = React.createClass({
	displayName : 'ButtonAppMenu',

	handleClick : function () {
		Actions.showDialog(dialogs.MARKDOWN_EDITOR);
	},

	render : function () {
		return (
				<UI.NavigationAction className="e-button_app_menu" onTap={this.handleClick}>
					<UI.Icon icon="paper-airplane" />
				</UI.NavigationAction>
			)
	}
});