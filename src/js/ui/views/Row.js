/** @jsx React.DOM */

var Creater 	= require('../../helpers/Creater');
var UI 		 	= require('_ui');
var React 		= require('react/addons');
var BS 			= require('react-bootstrap');
var Group 		= require('./Group');

module.exports = Creater.createView({
	displayName : 'Row',

	handleClick : function () {
		console.log(12)
	},

	_getEmpty 	: function () {
		return (<UI.BuildHelper mode={this.state.mode}>
					<UI.ActionButton onTap={this.handleClick}>Add content to Row</UI.ActionButton>
				</UI.BuildHelper>);
	},

	render  	: function () {
		var props = this.getSource(),
			model = this.getModel();
		
		return (<UI.Styles model={model.getStyles()} fluid componentClass={BS.Grid}>
					<Group collection={model.getSubviews()} componentClass={BS.Row}>
					 	{this._getEmpty()}
					</Group>
				</UI.Styles>
				)
	}
});