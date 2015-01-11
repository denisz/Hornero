var React 	 = require('react/addons');

module.exports = {
	parentContext : {
		childContextTypes: {
			app 	: React.PropTypes.object.isRequired
		}	
	},
	childrenContext : {
		contextTypes: {
	      	app 	: React.PropTypes.object.isRequired
	    }
	}
}