/** @jsx React.DOM */

var Creater 		= require('../../../helpers/Creater');
var _ 				= require('underscore');
var React 	 		= require('react/addons');
var UI 		 		= require('_ui');
var Fields 			= require('_fields');
var BS 				= require('react-bootstrap');
var ReactStyles 	= require('react-style');
var Addons 			= require('_styles:addons');

module.exports = Creater.createStyle({
	mixins : [Addons.LinkedModelMixin],

	getDefaultProps : function () {

	},

	render : function () {
		var translate, size;

		if (this.props.properties.indexOf('size') > -1) {
			size = (<div className="group">
						<label>Size</label>
						<span className="help" data-content="width">
							<input type="number" className="control sm icon" valueLink={this.linkState('width')} />
						</span>
						<UI.Icon named="android-lock" className="sm"/>
						<span className="help" data-content="height">
							<input type="number" className="control sm icon" valueLink={this.linkState('height')} />
						</span>
					</div>)
		}

		if (this.props.properties.indexOf('translate') > -1) {
			translate = (<div className="group">
							<label>Position</label>
							<span className="help" data-content="X">
								<input type="number" className="control sm" valueLink={this.linkState('left')} />
							</span>
							<span className="help" data-content="Y">
								<input type="number" className="control sm" valueLink={this.linkState('top')}  />
							</span>
						</div>)
		}

		return (<UI.FlexBlock className={this.props.className} height={"auto"}>
					<div className="field-header">Box Model</div>
					<form className="form">
						{translate}
						{size}
					</form>
				</UI.FlexBlock>)
	}
});