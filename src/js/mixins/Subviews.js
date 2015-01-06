var Group 		= require('../models/Group');
var KEY 		= '_subviews';

module.exports = {
	_initializeSubviews : function () {
		var collection = new Group(this.get('subviews'), { model : this.constructor });
		this.set(KEY, collection);
		
		this.on('change:subviews', this._changeSubview, this);
	},

	getSubviews : function () {
		return this.get(KEY);
	},

	_changeSubview : function (model, data, options) {
		var subviewsCollection = this.getSubviews();

		if (_.isArray(data)) {
			_.each(data, this._addSubview, this);		
		} else {
			subviewsCollection.clear();
		}		
	},

	_addSubview : function (spec, index) {
		var subviewsCollection 	= this.getSubviews(),
			prototypeModel 		= HelperModel.getModelByName(spec.displayName);

		//сделать проверку данных
		if (prototypeModel) {
			var instance = new prototypeModel(spec);

			subviewsCollection.add( instance, {
				at : index
			});			
		}
	},

	addSubview : function (spec) {
		var model = this;

		if (spec.parentKey) {
			model = this.getViewByKey(spec.parentKey);
			delete spec.parentKey;
		}

		if (model) {
			model._addSubview(spec);	
		}		
	},

	removeSubview : function (spec) {
		var model;

		if (spec.key) {
			model = this.getViewByKey(spec.key);
			model.remove();	
		}
	},

	getViewByKey : function (key) {
		var subviews 	= this.getSubviews();

		if (this.attributes.key == key) {
			return this;
		} else if (subviews) {
			return subviews.getViewByKey(key)
		}

		return false
	},

	_toJSONSubview : function (data) {
		var subviews = this.getSubviews().toJSON();

		if (data) {
			delete data[KEY];
			delete data.subviews;

			if (subviews.length) {
				data.subviews = subviews;	
			}	
		}

		return subviews;
	}
}