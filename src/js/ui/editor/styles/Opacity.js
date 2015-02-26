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

	render : function () {
		return (<UI.FlexBlock className={this.props.className} height={"auto"}>
					<div className="form">
						<div className="group">
							<label className="label">Range</label>
							<input type="range" className="control lg" min="0" max="100" valueLink={this.linkState("font-size")}/>
						</div>
					</div>
				</UI.FlexBlock>)
	}
});