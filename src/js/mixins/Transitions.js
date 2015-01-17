var _ 					= require('underscore');
var TRANSITION_KEYS 	= require('_constants').transition;

module.exports = {
	getViewTransition: function(key) {
		if (!_.contains(TRANSITION_KEYS, key)) {
			console.log('Invalid View Transition: ' + key);
			key = 'none';
		}

		var transition = {
			key: key,
			name: 'view-transition-' + key,
			in: false,
			out: false
		};

		if (_.contains(['reveal-from-top', 'reveal-from-bottom'], key)) {
			transition.out = true;
			transition.in  = false;
		} else if (_.contains(['show-panel-right', 'reveal-panel-right','show-from-left', 'show-from-right', 'reveal-from-left', 'reveal-from-right'], key)) {
			transition.in = true;
			transition.out = true;
		} else if (_.contains(['show-overlay-fade', 'fade', 'fade-contract', 'fade-expand', 'show-from-top', 'show-from-bottom'], key)) {
			transition.in = true;
			transition.out = true;
		}
		
		return transition;
	},
}
