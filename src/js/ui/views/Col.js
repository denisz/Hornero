/** @jsx React.DOM */

var Creater 	= require('../../helpers/Creater');
var UI 		 	= require('touchstonejs').UI;
var HUD 	 	= require('../components');
var React 		= require('react/addons');
var BS 			= require('react-bootstrap');

module.exports = Creater.createClass({
	displayName : 'Container',

	render  	: function () {
		var props = this.getSource(),
			model = this.getModel();
		
		return (<BS.Col {...props.attributes}>
					<HUD.Styles model={model.getStyles()}>
						<HUD.Group collection={model.getSubviews()}/>
					</HUD.Styles>
					<div> Add content</div>
				</BS.Col>)
	}
});