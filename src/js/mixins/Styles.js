var StyleModel = require('../models/Style');
var KEY = '_styles';

module.exports = {
	_initializeStyles : function () {
		var model = new StyleModel(this.get('styles'));
		this.set(KEY, model);

		this.proxy(model, 'change', this, 'change');

		this.on('change:styles', this._changeStyles, this);
	},

	getStyles : function () {
		return this.get(KEY);
	},

	_changeStyles : function (model, data, options) {
		var stylesModel = this.getStyles();

		if (!data) {
			stylesModel.clear()
		} else {
			stylesModel.set(data);	
		}
		
	},

	_toJSONStyles : function (data) {
		var stylesModel = this.getStyles();
		var result 		= stylesModel.toJSON();

		if (data) {
			//если пустые стили, удаляем свойство
			data.styles = result;
			delete data[KEY];	
		}

		return result;
	}
}