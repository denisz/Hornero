/** @jsx React.DOM */

var Creater  	= require('../../helpers/Creater');
var HUD 	 	= require('../components');
var React 	 	= require('react/addons');
var UI 		 	= require('touchstonejs').UI;
var Group 	 	= require('./Group')
var Actions  	= require('../../actions/editor');
var FloatPanel 	= require('../../constants/floatPanel');

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

		return (<UI.FlexBlock scrollable>
					<HUD.Styles model={model.getStyles()}>
						<div>{props.get('text')}</div>
						<Group collection={model.getSubviews()} />
					</HUD.Styles>
					<HUD.BuildHelper mode={this.state.mode}>
						<HUD.ActionButton onTap={this.handleClickShowSettings}>Show settings</HUD.ActionButton>
						<HUD.ActionButton onTap={this.handleClickShowLibrary}>Show library</HUD.ActionButton>
					</HUD.BuildHelper>
				</UI.FlexBlock>)
	}
});