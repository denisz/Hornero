var ReactStyle  	= require('react-style');
var classnames 		= require('classnames');

/**
	берем из модели аттрибуты и делаем трансформацию для вставки в DOM
**/
module.exports = {
	getAttributes : function () {
		var model = this.getModel();

		console.log(model.get('styles'));
		
		return {
			style : ReactStyle(model.get('styles'))
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