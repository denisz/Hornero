/** @jsx React.DOM */

var Creater 		= require('../../../helpers/Creater');
var _ 				= require('underscore');
var React 	 		= require('react/addons');
var UI 		 		= require('_ui');
var BS 				= require('react-bootstrap');
var ReactStyles 	= require('react-style');

var Addons 	= require('_styles:addons')


//'backgroundRepeat', 'backgroundSize', 'backgroundImage'
module.exports = Creater.createStyle({
	mixins : [Addons.LinkedModelMixin],

	render : function () {
		var model = this.getModel();

		return (<UI.FlexBlock className={this.props.className} height={"auto"}>
					<div className="field-header">Fill</div>
					<div className="form">
						<div className="group">
							
						</div>
						<div className="group">
							<span style={model} className="color-show"></span>
						</div>
					</div>
				</UI.FlexBlock>)
	}
});