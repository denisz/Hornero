/** @jsx React.DOM */

var Creater 		= require('../../../helpers/Creater');
var _ 				= require('underscore');
var React 	 		= require('react/addons');
var UI 		 		= require('_ui');
var ReactStyles 	= require('react-style');

var Addons 	= require('_styles:addons')


module.exports = Creater.createStyle({
	mixins : [Addons.LinkedModelMixin],

	render : function () {
		var key 	= this.props.property;
		var label 	= this.props.label ? <label className="label">{this.props.label}</label> : null;
		var control = (<select valueLink={this.linkState(key)} className="control lg" >
				{this.props.options.map(function (item) { 
					return <option value={item.value}>{item.label}</option>
				})}
			</select>);

		return (<UI.FlexBlock className={this.props.className} height={"auto"}>
					<div className="form">
						<div className="group">
							{label}
							{control}
						</div>
					</div>
				</UI.FlexBlock>)
	}
});