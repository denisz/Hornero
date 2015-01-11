/** @jsx React.DOM */

var _ 	  			= require('underscore')	
var React 			= require('react/addons');
var ReactBackbone 	= require('react.backbone');
var UI 				= require('touchstonejs').UI;
var Creater 		= require('../../helpers/Creater');

var ViewContextTypes = require('../../mixins/ViewContextTypes');

module.exports =  React.createBackboneClass({
	displayName : 'Group',

	mixins : [ViewContextTypes.childrenContext],

	propTypes: {
	    componentClass: React.PropTypes.any,
	    collection : React.PropTypes.object.isRequired
	},

	onModelChange : function () {
		this.syncSubviews();
	},

	getDefaultProps : function () {
		return {
			componentClass : 'div'
		}
	},

	getInitialState : function () {
		return {
			subviews : this.__getPrepareSubviews()
		}
	},

	//передача контекста
	__getPrepareSubviews : function () {
		return React.withContext(this.context, function () {
		   return this.getCollection().map(Creater.createComponent); 
		}.bind(this));
	},

	syncSubviews 	: function (model) {
		this.setState( {
			subviews : this.__getPrepareSubviews()
		})
	},

	getSubviews 	: function () {
		return this.state.subviews;
	},

	render 			: function () {
		var subviews = this.getSubviews();

		var ComponentClass 	= this.props.componentClass;
    	var other 			= _.omit(this.props, 'componentClass', 'collection');
		
		return (React.createElement(ComponentClass, other, subviews));
	}
})