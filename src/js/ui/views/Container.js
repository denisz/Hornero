/** @jsx React.DOM */

var Creater 	= require('../../helpers/Creater');
var UI 		 	= require('touchstonejs').UI;
var HUD 	 	= require('../components');
var React 		= require('react/addons');
var Group 		= require('./Group');

module.exports = Creater.createView({
	displayName : 'Container',

	handleClick : function () {
		console.log(12)
	},

	render  	: function () {
		var props = this.getSource(),
			model = this.getModel();
		
		return (<UI.FlexBlock>
					<HUD.Styles model={model.getStyles()}>
						<Group collection={model.getSubviews()}/>
					</HUD.Styles>
					<HUD.BuildHelper mode={this.state.mode}>
						<HUD.ActionButton onTap={this.handleClick}>Add content</HUD.ActionButton>
					</HUD.BuildHelper>
				</UI.FlexBlock>)
	}
});