var _ = require('underscore');


module.exports = {
	parse : function (attrs, options) {
		var transform = this.transform;

		if (transform) {
			for (var i in transform) {
				if (attrs.hasOwnProperty(i)) attrs = transform[i](attrs[i], attrs);
			}	
		}
		
		return attrs;
	}

}