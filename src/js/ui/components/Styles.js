/** @jsx React.DOM */
var ReactBackbone 	= require('react.backbone');
var ReactStyle  	= require('react-style');
var React 			= require('react/addons');

module.exports =  ReactBackbone.createBackboneClass({
	displayName : 'Styles',

	getDefaultProps : function () {
		return {
			componentClass : 'div'
		}
	},

	render 			: function () {
		var model  			= this.getModel(),
			styles 			= ReactStyle(model.toJSON()),
			ComponentClass 	= this.props.componentClass,
			props 			= _.omit(this.props, 'model', 'componentClass', 'children');

		return (<ComponentClass styles={styles} {...props}>{this.props.children}</ComponentClass>)
	}
})