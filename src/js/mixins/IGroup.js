var _ 	  			= require('underscore')	
var React 			= require('react/addons');
var ReactBackbone 	= require('react.backbone');
var UI 				= require('touchstonejs').UI;
var Creater 		= require('../helpers/Creater');

module.exports =  {
	displayName : 'Group',

	changeOptions: 'add remove reset sort refresh',

	propTypes: {
	    collection  	: React.PropTypes.object.isRequired,
	    componentClass 	: React.PropTypes.any,
	    createComponent : React.PropTypes.func
	},

	onModelChange : function () {
		this.syncSubviews();
	},

	getDefaultProps : function () {
		return {
			componentClass : 'div',
			createChildComponent: Creater.createComponent
		}
	},

	getInitialState : function () {
		return {
			subviews : this.__getPrepareSubviews()
		}
	},

	__getPrepareSubviews : function () {
		return React.withContext(this.context, function () {
		   return this.getCollection().map(this.props.createChildComponent); 
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
		
		return (React.createElement(ComponentClass, other, [subviews, this.props.children]));
	}
}