/** @jsx React.DOM */

var Creater 		= require('../../../helpers/Creater');
var _ 				= require('underscore');
var React 	 		= require('react/addons');
var UI 		 		= require('_ui');
var BS 				= require('react-bootstrap');
var ReactStyles 	= require('react-style');

var Addons 	= require('_styles:addons')


module.exports = Creater.createStyle({
	mixins : [Addons.LinkedModelMixin],

	handleClick : function () {
		var model = this.getModel();
		model.set({
			'font-size' : 30,
			'width' 	: 100
		});
	},

	render : function () {
		return (<UI.FlexBlock className={this.props.className} height={"auto"}>
					<div className="field-header">Fill</div>
					<div className="form">
						<div className="group">
							<label className="label">Range</label>
							<input type="range" className="control lg" min="0" max="100" valueLink={this.linkState("font-size")}/>
						</div>
						<div className="group">
							<label className="label">Select</label>
							<select valueLink={this.linkState("text-align")} className="control lg" >
							    <option value="left">Left</option>
							    <option value="right">Right</option>
							    <option value="center">Center</option>
							  </select>
						</div>

						<div className="group">
							<button value="click" onClick={this.handleClick} className="control xss">
								<UI.Icon named="gear-a"/>
							</button>
						</div>
					</div>
				</UI.FlexBlock>)
	}
});