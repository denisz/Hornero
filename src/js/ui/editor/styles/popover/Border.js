/** @jsx React.DOM */

var _ 				= require('underscore');
var React 	 		= require('react/addons');
var BS 				= require('react-bootstrap');
var UI 				= require('_ui');
var ColorPicker 	= require('react-colorpicker');
var Addons 			= require('_styles:addons')

module.exports = React.createBackboneClass({
	mixins : [Addons.LinkedModelMixin],

	handleColorPicker : function (value) {
		var model = this.getModel();
		model.set("color", value.toHex());
	},
	
	handleClickDone : function () {
		this.props.onRequestHide();
	},

	render : function () {
		var model = this.getModel();

		return (<BS.Popover {...this.props} width={240}>
					<div className="form">
						<div className="group">
							<label>Size</label>
							<select className="control sm" valueLink={this.linkState('size')}>
								{Addons.FillOptionsRange(0, 50, 1)}
							</select>
							<label>px</label>
						</div>
						<div className="group">
							<label>Style</label>
							<select className="control lg" valueLink={this.linkState('style')}>
							    <option value="solid">solid</option>
							    <option value="dashed">dashed</option>
							    <option value="dotted">dotted</option>
							</select>
						</div>
						<div className="divider" />
						<div className="group">
							<ColorPicker color={model.get('color')} onChange={this.handleColorPicker} />
						</div>
						<UI.FlexLayout direction="row" justifyContent="flex-end">
								<button value="done" onClick={this.handleClickDone} className="control">done</button>
						</UI.FlexLayout>
					</div>
				</BS.Popover>)
	}
})