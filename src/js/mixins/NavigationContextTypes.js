var React 	 = require('react/addons');

module.exports = {
	parentContext : {
		childContextTypes: {
			navigation 	: React.PropTypes.object.isRequired
		}	
	},
	childrenContext : {
		contextTypes: {
	      	navigation 	: React.PropTypes.object.isRequired
	    }
	}
}