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
			subviews   = collection.map(function (model) {
				var viewName 	= model.get('displayName'),
					view 		= window.HelperView.getViewByName( viewName );

				return Creater.createComponent(view, model);
			}, this);

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