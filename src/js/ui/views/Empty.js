/** @jsx React.DOM */
var Creater 	= require('../../helpers/Creater');

var View = Creater.createClass({
	displayName : 'Empty',

	handleClick : function () {
		console.log(12)
	},

	render  	: function () {
		var props = this.getSource();
		var attrs = this.getAttributes();
		
		return (<div {...attrs}>{props.get('text')}</div>)
	}
});

module.exports = Creater.createFactory(View);