var _ = require('underscore');

module.exports = {
	collectionWithProperty : function () {},
	pickProperties : function () {
		var allowProperties = _.flatten(arguments);

		return function (props, propName) {
			if (allowProperties.length) {
				return _.pick(props, allowProperties);
			}
			
			return props;
		}		
	},

	Styles : {
		//разрешаем стили из boxModel { width, height, margin, padding, border}
		BoxModel : function () {
			return [ 'width', 'height', 'margin', 'padding', 'border']
		},
		//разрешаем изменение {background}
		Background : function () {
			return ['backgroundColor', 'backgroundImage']
		},
		// разрешаем изменения текстовых свойств
		Text : function () {
			return ['fontSize', 'color', 'fontWeight', 'fontFamily']
		},

	}
}