/** @jsx React.DOM */

var Creater 	= require('../../helpers/Creater');
var UI 		 	= require('_ui');
var React 		= require('react/addons');
var Group 		= require('./Group');

var Actions 	= require('_actions').Editor;
var floatPanel 	= require('_constants').floatPanel;

module.exports = Creater.createView({
	displayName : 'Container',

	handleClick : function () {
		Actions.showFloatPanelWith(floatPanel.LIBRARY, {
			model : this.props.model
		});
	},

	_getEmpty : function () {
		return (<UI.BuildHelper mode={this.state.mode}>
					<UI.ActionButton onTap={this.handleClick}>Add content</UI.ActionButton>
				</UI.BuildHelper>);
	},

	render  	: function () {
		var props = this.getSource(),
			model = this.getModel();
		
		return (<UI.FlexBlock>
					<UI.Styles model={model.getStyles()}>
						<Group collection={model.getSubviews()}>
							{this._getEmpty()}
						</Group>
					</UI.Styles>
				</UI.FlexBlock>)
	}
});