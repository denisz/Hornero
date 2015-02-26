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
	displayName : 'SlickItem',

	handleClick : function () {
		Actions.showFloatPanelWith(floatPanel.LIBRARY, {
			model : this.props.model
		});
	},

	_getEmpty : function () {
		return (<UI.BuildHelper mode={this.state.mode}>
					<UI.ActionButton onTap={this.handleClick}>Add content to SlickItem</UI.ActionButton>
				</UI.BuildHelper>)
	},

	render  	: function () {
		var props = this.getSource(),
			model = this.getModel();

		return (<UI.Styles model={model.getStyles()} className={this.props.className} style={this.props.style} componentClass={"div"}>
					<Group collection={model.getSubviews()}>
						{this._getEmpty()}
					</Group>
				</UI.Styles>)
	}
});