var Types = require('../../../constants/fieldTypes');
var pairs = {};

pairs[Types.INPUT_INTEGER] 	= require('./InputInteger');
pairs[Types.INPUT_STRING] 	= require('./InputInteger');
pairs[Types.COLOR_PICKER]  	= require('./ColorPicker');
pairs[Types.SLIDER]  		= require('./Slider');
pairs[Types.SELECT]  		= require('./Select');
pairs[Types.TEXTAREA]  		= require('./Textarea');

module.exports = {
	INPUT_INTEGER 	: require('./InputInteger'),
	INPUT_STRING	: require('./InputInteger'),
	SELECT 			: require('./Select'),
	COLOR_PICKER 	: require('./ColorPicker'),
	ENUM 			: require('./Enum'), 
	SLIDER 			: require('./Slider'),
	TEXTAREA 		: require('./Textarea'),
	POSITION 		: require('./Position'),
	IMAGE 			: require('./Image'),
	RANGE 			: require('./Range')
};
