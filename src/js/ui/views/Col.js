/** @jsx React.DOM */

var _ = require('underscore');

var Creater 	= require('../../helpers/Creater');
var UI 		 	= require('touchstonejs').UI;
var HUD 	 	= require('../components');
var React 		= require('react/addons');
var BS 			= require('react-bootstrap');
var Group 		= require('./Group');


module.exports = Creater.createView({
	displayName : 'Column',

	render  	: function () {
		var props = this.getSource(),
			model = this.getModel();

		var attrs = _.pick(props.attributes, ['xs', 'md']);
		
		return (<BS.Col {...attrs}>
					<HUD.Styles model={model.getStyles()}>
						<Group collection={model.getSubviews()}/>
					</HUD.Styles>
					<div> Add content</div>
				</BS.Col>)
	}
});