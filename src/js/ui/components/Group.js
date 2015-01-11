/** @jsx React.DOM */
var _ 	  			= require('underscore')	
var React 			= require('react/addons');
var ReactBackbone 	= require('react.backbone');
var UI 				= require('touchstonejs').UI;
var Creater 		= require('../../helpers/Creater');

module.exports =  React.createBackboneClass({
	onModelChange : function () {
		this.syncSubviews();
	},

	getInitialState : function () {
		return {
			subviews : this.__getPrepareSubviews()
		}
	},

	__getPrepareSubviews : function () {
		var collection = this.getCollection(),
			subviews   = collection.map(Creater.createComponent, this);

		return subviews
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
		return (<div>{subviews}</div>)
	}
})