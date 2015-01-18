var React 	 = require('react/addons');

module.exports = {
	parentContext : {
		childContextTypes: {
			dialog 	: React.PropTypes.object.isRequired
		}	
	},
	childrenContext : {
		contextTypes: {
	      	dialog 	: React.PropTypes.object.isRequired
	    }
	}
}