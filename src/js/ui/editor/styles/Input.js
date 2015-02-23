/** @jsx React.DOM */

var Creater 		= require('../../../helpers/Creater');
var _ 				= require('underscore');
var React 	 		= require('react/addons');
var UI 		 		= require('_ui');
var ReactStyles 	= require('react-style');

var classnames 		= require('classnames');

var Addons 	= require('_styles:addons')


module.exports = Creater.createStyle({
	mixins : [Addons.LinkedModelMixin],

	getDefaultProps : function () {
		return {
			type  		: "text",
			maxlength 	: 100,
			readonly  	: false,
			size 		: 'lg',
			help 		: null
		}
	},
	render : function () {
		var className = classnames("control", this.props.size);
		var key 	= this.props.property;
		var label 	= this.props.label ? <label className="label">{this.props.label}</label> : null;
		var control = (<input valueLink={this.linkState(key)} readonly={this.props.readonly} type={this.props.type} maxlength={this.props.maxlength} className={className} />);
		
		return (<UI.FlexBlock className={this.props.className} height={"auto"}>
					<div className="form">
						<div className="group">
							{label}
							<span className="help" data-content={this.props.help}>
								{control}
							</span>
						</div>
					</div>
				</UI.FlexBlock>)
	}
});