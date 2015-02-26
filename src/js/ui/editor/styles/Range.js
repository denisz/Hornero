/** @jsx React.DOM */

var Creater 		= require('../../../helpers/Creater');
var _ 				= require('underscore');
var React 	 		= require('react/addons');
var UI 		 		= require('_ui');
var ReactStyles 	= require('react-style');

var Addons 	= require('_styles:addons')


module.exports = Creater.createStyle({
	mixins : [Addons.LinkedModelMixin],

	getDefaultProps : function () {
		return {
			min : 0,
			max : 100,
			step: 1
		}
	},

	render : function () {
		var key 	= this.props.property;
		var min 	= this.props.min;
		var max 	= this.props.max; 
		var step 	= this.props.step;
		var label 	= this.props.label ? <label className="label">{this.props.label}</label> : null;
		var control = (<input type="range" className="control lg" min={min} max={max} step={step} valueLink={this.linkState(key)}/>);

		return (<UI.FlexBlock className={this.props.className} height={"auto"}>
					{this.props.header}
					<div className="form">
						<div className="group">
							{label}
							{control}
						</div>
					</div>
				</UI.FlexBlock>)
	}
});