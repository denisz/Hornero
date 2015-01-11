/** @jsx React.DOM */

var Creater 	= require('../../helpers/Creater');
var UI 		 	= require('touchstonejs').UI;
var Group 	 	= require('../components').Group;
var Styles 		= require('../components').Styles;
var React 		= require('react/addons');

module.exports = Creater.createClass({
	displayName : 'Empty',

	handleClick : function () {
		console.log(12)
	},

	render  	: function () {
		var props = this.getSource(),
			model = this.getModel(),
			attrs = this.getAttributes();
		
		return (<UI.FlexBlock>
					<Styles model={model.getStyles()}>
						<div>{props.get('text')}</div>
						<Group collection={model.getSubviews()} />
					</Styles>
				</UI.FlexBlock>)
	}
});