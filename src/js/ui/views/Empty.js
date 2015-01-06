/** @jsx React.DOM */

var Creater 	= require('../../helpers/Creater');
var UI 		 	= require('touchstonejs').UI;
var Group 	 	= require('../components').Group;

var View = Creater.createClass({
	displayName : 'Empty',

	handleClick : function () {
		console.log(12)
	},

	render  	: function () {
		var props = this.getSource(),
			model = this.getModel(),
			attrs = this.getAttributes();
		
		return (<UI.FlexBlock>
					<div {...attrs}>
						<div>{props.get('text')}</div>
						<Group collection={model.getSubviews()} />
					</div>
				</UI.FlexBlock>)
	}
});

module.exports = Creater.createFactory(View);