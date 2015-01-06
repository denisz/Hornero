var ReactStyle  	= require('react-style');
var classnames 		= require('classnames');

/**
	берем из модели аттрибуты и делаем трансформацию для вставки в DOM
**/
module.exports = {
	getAttributes : function () {
		var model  = this.getModel(),
			styles = model.getStyles();

		return {
			styles : ReactStyle(styles.toJSON())
		}
	},

	getStyles : function () {
		var model = this.getModel();
		return  ReactStyle(model.get('styles'))
	},

	getHandles : function () {
		// обработчики кастомных событий 
	}
}