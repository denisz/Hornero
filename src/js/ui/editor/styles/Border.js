/** @jsx React.DOM */

var Creater 		= require('../../../helpers/Creater');
var _ 				= require('underscore');
var React 	 		= require('react/addons');
var UI 		 		= require('_ui');
var BS 				= require('react-bootstrap');
var ReactStyles 	= require('react-style');
var Popover 		= require('./popover/Border');
var Backbone 		= require('backbone');

var Addons 	= require('_styles:addons')


module.exports = Creater.createStyle({
	mixins : [Addons.LinkedModelMixin],

	getDefaultProps : function () {
		return {
			label : null
		}
	},

	getInitialState : function () {
		var model 		= this.getModel(),
			property 	= this.props.property;

		var obj = Addons.TransformStyle.parse('border', model.get(property)) || {};
		obj.property = property;

		return obj;
	},

	prepareValueByModel : function (values) {
		return Addons.TransformStyle.serialize('border', values);
	},

	initializeModelForPopover : function () {
		var model = new Backbone.Model(this.state);
		model.on("change", function (model, options) {
			this.setState(model.toJSON());
		}, this)
		return model;
	},

	render : function () {
		var property 	= this.props.property; 
		var label 	 	= this.props.label ? <label className="label">{this.props.label}</label> : null;
		var popover 	= React.createElement(Popover, { model : this.initializeModelForPopover() });

		var stylesColorShow = { 
			backgroundColor : this.state.color 
		};

		return (<UI.FlexBlock className={this.props.className} height={"auto"}>
					<div className="form">
						<div className="group">
							<input type="checkbox" />
							<UI.OverlayTrigger trigger="click" placement="left" overlay={popover}>
								<span>
									<span>{this.state.size}px</span><span>{this.state.style}</span><span style={stylesColorShow} className="color-show"></span>
								</span>
				      		</UI.OverlayTrigger>
						</div>
					</div>
				</UI.FlexBlock>)
	}
});