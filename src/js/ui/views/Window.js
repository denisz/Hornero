/** @jsx React.DOM */

var Creater  = require('../../helpers/Creater');
var HUD 	 = require('../components');
var React 	 = require('react/addons');
var UI 		 = require('touchstonejs').UI;

var Actions = require('../../actions/editor');

module.exports = Creater.createClass({
	displayName : 'Window',

	render : function () {
		var props = this.getSource(),
			model = this.getModel(),
			attrs = this.getAttributes();

		return (<UI.FlexBlock>
					<HUD.Styles model={model.getStyles()}>
						<div>{props.get('text')}</div>
						<HUD.Group collection={model.getSubviews()} />
					</HUD.Styles>
					<HUD.BuildHelper mode={this.state.mode}>
						<HUD.ActionButton onTap={Actions.showPanelSettingsWithModel}>Add layout</HUD.ActionButton>
					</HUD.BuildHelper>
				</UI.FlexBlock>)
	}
});