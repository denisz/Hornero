/** @jsx React.DOM */

var Creater  	= require('../../helpers/Creater');
var React 	 	= require('react/addons');
var UI 		 	= require('_ui');
var Group 	 	= require('./Group');
var Actions  	= require('_actions').Editor;
var FloatPanel 	= require('_constants').floatPanel;

module.exports = Creater.createView({
	displayName : 'Window',

	handleClickShowSettings : function () {
		Actions.showFloatPanelWith(FloatPanel.SETTINGS, {
			model : this.getModel()
		})
	},

	handleClickShowLibrary : function () {
		Actions.showFloatPanelWith(FloatPanel.LIBRARY, {
			model : this.getModel()
		})	
	},

	render : function () {
		var props = this.getSource(),
			model = this.getModel(),
			attrs = this.getAttributes();

		return (<div>
					<UI.Styles model={model.getStyles()}>
						<div>{props.get('text')}</div>
						<Group collection={model.getSubviews()} />
					</UI.Styles>
					<UI.BuildHelper mode={this.state.mode}>
						<UI.ActionButton onTap={this.handleClickShowLibrary}>Show library</UI.ActionButton>
					</UI.BuildHelper>
				</div>)
	}
});