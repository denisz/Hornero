var sections = require('_constants').settingsSections;

//todo определить константы для стилей
var DEFAULT_BUILD = {
		sections 	: [sections.STYLES, sections.CONTENTS, sections.DATA],
		styles 		: ['background', 'boxModel', 'font']
	};

module.exports = {
	Empty :  DEFAULT_BUILD
} 