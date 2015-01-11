/* Generate words, sentences, or paragraphs. */

var loremIpsum = require('lorem-ipsum');

module.exports = {
	Spinner : {
		name 			: 'cube-grid',
		isParentable 	: false,
		isImmutable 	: true
	},
	Empty : {
		text 			: loremIpsum({ count: 30 , units: 'words' }),
		isParentable 	: true,
		isImmutable 	: true
	},
	Label : {
		text 			: loremIpsum(),
		isParentable 	: false,
		isImmutable 	: true	
	},
	Col : {
		
	}
}