/** @jsx React.DOM */

var Creater 	= require('../../helpers/Creater');
var UI 		 	= require('_ui');
var React 		= require('react/addons');
var Group 		= require('./Group');

module.exports = Creater.createView({
	displayName : 'Picture',

	handleClick : function () {
		console.log(12)
	},

	render  	: function () {
		var props = this.getSource(),
			model = this.getModel(),
			attrs = this.getAttributes();
		
		return (<UI.Styles model={model.getStyles()} componentClass={UI.FlexBlock}>
					<UI.ImageLoader src={model.get('src')} />
				</UI.Styles>)
	}
});