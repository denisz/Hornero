/** @jsx React.DOM */

var _ = require('underscore');

var React 		= require('react/addons');
var Creater 	= require('../../helpers/Creater');
var UI 		 	= require('_ui');
var BS 			= require('react-bootstrap');
var Group 		= require('./Group');

var Actions 	= require('_actions').Editor;
var floatPanel 	= require('_constants').floatPanel;

module.exports = Creater.createView({
	displayName : 'Column',

	handleClick : function () {
		Actions.showFloatPanelWith(floatPanel.LIBRARY, {
			model : this.props.model
		});
	},

	_getEmpty : function () {
		return (<UI.BuildHelper mode={this.state.mode}>
					<UI.ActionButton onTap={this.handleClick}>Add content to Col</UI.ActionButton>
				</UI.BuildHelper>)
	},

	render  	: function () {
		var props = this.getSource(),
			model = this.getModel();

		var attrs = _.pick(props.attributes, ['xs', 'md']);

		return (<UI.Styles model={model.getStyles()} {...attrs} componentClass={BS.Col}>
					<Group collection={model.getSubviews()}>
						{this._getEmpty()}
					</Group>
				</UI.Styles>)
	}
});