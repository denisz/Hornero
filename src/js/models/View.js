var Backbone 	= require('backbone');
var ISync   	= require('../mixins/ISync'); 
var _ 			= require('underscore');
var Group 		= require('./Group');


var Model = Backbone.Model.extend(_.extend({}, ISync, {
	defaults : function () {
		return {
			key 	  : _.uniqueId('key_'),
			_subviews : new Group([], { model : Model })
		}
	},

	initialize : function () {
		this.on('change:subviews', this._changeSubview, this);
	},

	_changeSubview : function (model, data, options) {
		var subviewsCollection = this.getSubviews();

		if (_.isArray(data)) {
			_.each(data, this._addSubviewByName, this);		
		} else {
			subviewsCollection.clear();
		}		
	},

	_addSubviewByName : function (spec, index) {
		var subviewsCollection 	= this.getSubviews(),
			prototypeModel 		= HelperModel.getModelByName(spec.displayName);

		this.checkValidSpec(spec);

		subviewsCollection.add( new prototypeModel(spec), {
			at : index
		});		
	},

	checkValidSpec : function (spec) {
		//проверить валидность данных
	},

	toJSON : function () {
		var data 		= _.clone(this.attributes);
		var subviews 	= this.getSubviews().toJSON();

		delete data._subviews;
		delete data.subviews;

		if (subviews.length) {
			data.subviews = subviews;	
		}
		
		return data;
	},

	getSubviews : function () {
		return this.get('_subviews');
	},

	addSubview : function (spec) {
		var model = this;

		if (spec.parentCid) {
			model = this.getViewByCid(spec.parentCid);
			delete spec.parentCid;
		} else if (spec.parentKey){
			model = this.getViewByKey(spec.parentKey);
			delete spec.parentKey;
		}

		model._addSubviewByName(spec);
	},

	removeSubview : function (spec) {
		var model;

		if (spec.cid) {
			model = this.getViewByCid(spec.cid);
		} else if (spec.key) {
			model = this.getViewByKey(spec.key);
		}

		if (model) {
			model.remove();	
		}
	},

	getViewByCid : function (cid) {
		var subviews 	= this.getSubviews();

		if (this.cid == cid) {
			return this
		} else if (subviews) {
			return subviews.getViewByCid(cid)
		}

		return null
	},

	getViewByCid : function (key) {
		var subviews 	= this.getSubviews();

		if (this.get('key') == key) {
			return this;
		} else if (subviews) {
			return subviews.getViewByKey(key)
		}

		return null
	},

	toXML : function () {
		var json = this.toJSON();
		
	}
}));

module.exports = Model;