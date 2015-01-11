/** @jsx React.DOM */

var Creater  = require('../../helpers/Creater');
var HUD 	 = require('../components');
var React 	 = require('react/addons');
var UI 		 = require('touchstonejs').UI;

module.exports = Creater.createClass({
	render : function () {
		var props = this.getSource(),
			model = this.getModel(),
			attrs = this.getAttributes();

		return (<UI.FlexBlock>
					<HUD.Styles model={model.getStyles()}>
						<div>{props.get('text')}</div>
						<HUD.Group collection={model.getSubviews()} />
					</HUD.Styles>
				</UI.FlexBlock>)
	}
});