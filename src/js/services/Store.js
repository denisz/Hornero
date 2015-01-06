var dispatcher 	= require('./AppDispatcher'),
	constants 	= require('../constants'),
	_ 			= require('underscore'),
	config 		= require('../config'),
	Backbone 	= require('backbone'),
	actions 	= constants.actions,
	sources 	= constants.sources,
	listenDispatcher = require('../mixins/ListenDispatcher');

var	Mock = require('../mock/tree');
var getDataFromPayload = function (payload) {
	return payload.data;
};

var Store = Backbone.Model.extend(_.extend({}, listenDispatcher, {
	actionsDispatcher : [
		[actions.EDITOR_LOAD, 	'onEditorLoad'],
		[actions.VIEW_ADD, 		'onViewAdd'],
		[actions.VIEW_REMOVE, 	'onViewRemove'],
	],

	initialize : function () {
		this.listenDispatcher()
	},

	/**mark - Model root**/

	getAttachModel : function () {
		return this.get('model');
	},

	attachModel : function (model) {
		this.set('model', model);
	},

	detachModel : function () {
		this.set('model', null);
	},


	/**mark - Events**/
	onEditorLoad : function () {
		this.fetch();
	},

	onViewAdd : function (payload) {
		var data 	= getDataFromPayload(payload),
			model 	= this.getAttachModel();

		model.addSubview(data);	
	},

	onViewRemove : function (payload) {
		var data 		= getDataFromPayload(payload.data),
			model 		= this.getAttachModel();

		model.removeSubview(data);
	},


	/**mark  - serialize **/
	serialize : function (formatSerialize) {
		var model 	= this.getAttachModel(),
			format 	= constants.formatSerialize,
			result 	= null;

		switch(formatSerialize) {

			case format.JSON : 
				result = model.toJSON();
			break;

			case format.XML :
				result = model.toXML();
			break;	
		}

		return result;
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