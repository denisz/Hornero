var React 	 = require('react/addons');

module.exports = {
	parentContext : {
		childContextTypes: {
			canvas 	: React.PropTypes.object.isRequired,
			mode 	: React.PropTypes.string
		}	
	},
	childrenContext : {
		contextTypes: {
	      	canvas 	: React.PropTypes.object.isRequired,
			mode 	: React.PropTypes.string
	    }
	}
}