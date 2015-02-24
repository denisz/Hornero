/** @jsx React.DOM */

var ReactBackbone 	= require('react.backbone');
var ReactStyle  	= require('react-style');
var React 			= require('react/addons');
var classnames 		= require('classnames');

module.exports =  ReactBackbone.createBackboneClass({
	displayName : 'Styles',

	getDefaultProps : function () {
		return {
			componentClass 	: 'div',
			classNameView 	: 'editor-view'
		}
	},

	render 			: function () {
		var model  			= this.getModel(),
			styles 			= ReactStyle(model.toJSON()),
			ComponentClass 	= this.props.componentClass,
			props 			= _.omit(this.props, 'model', 'componentClass', 'children', 'className'),
			className  		= classnames(this.props.classNameView, this.props.className, 'view-styles');

		return (<ComponentClass styles={styles} className={className} {...props}>{this.props.children}</ComponentClass>)
	}
})