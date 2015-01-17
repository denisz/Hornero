/** @jsx React.DOM */

var Creater 	= require('../../helpers/Creater');
var UI 		 	= require('_ui');
var React 		= require('react/addons');
var Group 		= require('./Group');

module.exports = Creater.createView({
	displayName : 'Empty',

	handleClick : function () {
		console.log(12)
	},

	_getEmpty 	: function () {
		return (<UI.BuildHelper mode={this.state.mode}>
					<UI.ActionButton onTap={this.handleClick}>Add content to Empty</UI.ActionButton>
				</UI.BuildHelper>)
	},

	render  	: function () {
		var props = this.getSource(),
			model = this.getModel(),
			attrs = this.getAttributes();
		
		return (<UI.Styles model={model.getStyles()} componentClass={UI.FlexBlock}>
					<div>{props.get('text')}</div>
					<Group collection={model.getSubviews()}>
						{this._getEmpty()}
					</Group>
				</UI.Styles>)
	}
});