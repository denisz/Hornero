var dispatcher 	= require('./AppDispatcher'),
	constants 	= require('../constants'),
	_ 			= require('underscore'),
	config 		= require('../config'),
	Backbone 	= require('backbone'),
	actions 	= constants.actions,
	sources 	= constants.sources,
	listenDispatcher = require('../mixins/ListenDispatcher');

var	Mock = require('../mock/tree');

var Store = Backbone.Model.extend(_.extend({}, listenDispatcher, {
	actionsDispatcher : [
		[actions.EDITOR_LOAD, 	'onEditorLoad'],
		[actions.VIEW_ADD, 		'onViewAdd'],
		[actions.VIEW_REMOVE, 	'onViewRemove'],
		[actions.VIEW_UPDATE, 	'onViewUpdate']
	],

	initialize : function () {
		this.listenDispatcher()
	},

	/**mark - Model root**/

	getAttachModel : function () {
		return this.get('model');
	},

	registerModel : function (model) {
		this.set('model', model);
	},

	unregisterModel : function () {
		this.set('model', null);
	},


	/**mark - Events**/
	onEditorLoad : function () {
		this.fetch();
	},

	onViewAdd : function (payload) {
		var data 	 	=  HelperPayload.getData(payload),
			parentId 	=  HelperPayload.getProperty(payload, 'parentId'),
			model 	 	=  parentId ? this.getViewById(parentId) : this.getAttachModel();

		HelperPayload.deleteProperty(payload, 'parentId');

		if ( model ) {
			model.set('subviews', data, constants.subviews.ADD);
		}
	},

	onViewRemove : function (payload) {
		var id 		= HelperPayload.getProperty(payload, 'id'),
			model 	= this.getViewById(id);

		if ( model ) {
			model.destroy();	
		}
	},

	onViewUpdate : function (payload) {
		var	data 	= HelperPayload.getData(payload),
		 	model 	= this.getViewById( HelperPayload.getProperty(payload, 'id') );

		if ( model ) {
			model.set(data);
		}
	},

	/*Traversing
	*/
	getViewById : function (id) {
		var model = this.getAttachModel();
		return HelperModel.getById(id, model);
	},

	/**mark  - serialize **/
	serialize : function (formatSerialize) {
		var model = this.getAttachModel();
		return HelperModel.serialize(model, formatSerialize);
	},

	toJSON : function () {
		return this.serialize(constants.formatSerialize.JSON);
	},

	toString : function () {
		return JSON.stringify(this.toJSON());
	},

	fetch 		: function () {
		var model = this.getAttachModel();
		model && model.set(Mock);
	}
}))

var instanceStore = new Store();

if (config.debug) {
	window.Store = instanceStore;
}

module.exports = instanceStore;