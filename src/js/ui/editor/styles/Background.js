/** @jsx React.DOM */

var Creater 		= require('../../../helpers/Creater');
var _ 				= require('underscore');
var React 	 		= require('react/addons');
var UI 		 		= require('_ui');
var Fields 			= require('_fields');
var BS 				= require('react-bootstrap');
var ReactStyles 	= require('react-style');


module.exports = Creater.createStyle({
	render : function () {
		return (<UI.FlexBlock className={this.props.className} height={"auto"}>
					<div className="field-header">Background</div>
					<form className="form">
						<div className="group">
							<label className="label">Range</label>
							<input type="range" className="control lg" min="0" max="10" />
						</div>
					</form>
				</UI.FlexBlock>)
	}
});