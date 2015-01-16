/* Generate words, sentences, or paragraphs. */

var loremIpsum = require('lorem-ipsum');

/**
	isParentable - возможность содержать в себе дочерние элементы
	isImmutable - возможность изменять свойство

**/

module.exports = {
	Spinner : {
		categrory  		: 'element',
		tags 			: ['Loading', 'Spinner'],
		name 			: 'cube-grid',
		isParentable 	: false,
		isImmutable 	: false
	},
	Empty : {
		text 			: loremIpsum({ count: 50 , units: 'words' }),
		isParentable 	: true,
		isImmutable 	: false
	},
	Label : {
		text 			: loremIpsum(),
		isParentable 	: false,
		isImmutable 	: false	
	},
	Row : {
		subviews : [
			{
				displayName : 'Col'				
			}
		],
		isParentable 	: true
	},
	Col : {
		xs : 12, //телефоны
		sm : 6, //планшеты
		md : 6, //средние экрна
		lg : 3,//большие экраны
		isParentable 	: true
	}
}