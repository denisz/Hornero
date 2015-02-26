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

var bordersDefines = ['borderTop', 'borderBottom', 'borderLeft', 'borderRight'];
var DefaultValues = {
	size 	: 0,
	style 	: 'solid',
	color 	: '#000'
};

var Border = React.createBackboneClass({
	displayName : "Border",
	mixins 		: [Addons.LinkedModelMixin],

	propTypes : {
		property : React.PropTypes.string.isRequired
	},

	getDefaultProps : function () {
		return {
			property : ''
		}
	},

	getInitialState : function () {
		var model = this.getModel();
		return Addons.TransformStyle.parse('border', model.get(this.props.property)) || _.clone(DefaultValues);
	},

	prepareValueByModel : function (values) {
		return Addons.TransformStyle.serialize('border', values);
	},

	initializeModelForPopover : function (key) {
		var model 	= new Backbone.Model(this.state);

		model.on("change", function (model, options) {
			this.setState(model.toJSON());
		}, this)

		return model;
	},

	render : function () {
		var popover = React.createElement(Popover, { model : this.initializeModelForPopover() });
		var prototypeStyles = {}, property = this.props.property;

		prototypeStyles[property + 'Width']  = 2;
		prototypeStyles[property + 'Color'] = this.state.color;
		prototypeStyles[property + 'Style'] = this.state.style;
		
		var styles 	= ReactStyles(prototypeStyles);

		return (<UI.FlexBlock relative>
					<UI.OverlayTrigger trigger="click" placement="left" overlay={popover}>
						<div className="e-border" styles={styles}>
							{this.state.size + "px"}
						</div>
		      		</UI.OverlayTrigger>
				</UI.FlexBlock>)
	}
});


module.exports = Creater.createStyle({
	render : function () {
		var model = this.getModel();

		return (<UI.FlexBlock className={this.props.className} height={"auto"}>
					<UI.FlexLayout direction="row">
						<Border property="borderTop" 	key="borderTop" 	model={model} />
						<Border property="borderRight" 	key="borderRight"	model={model}/>
						<Border property="borderBottom" key="borderBottom"	model={model}/>
						<Border property="borderLeft" 	key="borderLeft"	model={model}/>
					</UI.FlexLayout>
				</UI.FlexBlock>)
	}
});