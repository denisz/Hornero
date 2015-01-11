var _ 						= require('underscore');
var React 					= require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Tappable 				= require('react-tappable');
var UI 						= require('touchstonejs').UI;
var DEFAULT_TRANSITION 		= 'none';
var Transitions 			= require('./Transitions');

module.exports = _.extend({}, Transitions, {
	getInitialStateNavigation : function () {
		return {
			viewTransition: this.getViewTransition(DEFAULT_TRANSITION),
		};
	},

	getCurrentView: function() {
		var views = {};
		views[this.state.currentView] = this.getView(this.state.currentView);
		return views;
	},

	getView: function(key) {
			
		var views = _.result(this, 'views') || {},
			view  = views[key],
			props = _.extend({}, this.state[key + '_props']);
		
		if (!view) {
			return (
				<UI.FlexLayout>
					<UI.FlexBlock>
						<UI.Feedback iconKey="ion-alert-circled" iconType="danger" text={'Sorry, the view <strong>"' + this.state.currentView + '"</strong> is not available.'} actionText="Okay, take me home" />
					</UI.FlexBlock>
				</UI.FlexLayout>
			);
		}
		
		if (this.getViewProps) {
			_.extend(props, this.getViewProps());
		}
		
		return React.createElement(view, _.extend(props, {
			key 		 : key,
			navigation   : this,
			viewClassName: this.state[key + '_class'] || 'view'
		}));
		
	},
	
	showView: function(key, transition, props, state) {

		if (_.isObject(transition)) {
			props = transition;
			transition = DEFAULT_TRANSITION;
		}
		if (!_.isString(transition)) {
			transition = DEFAULT_TRANSITION;
		}

		transition = this.getViewTransition(transition);

		if (!props) props = {};

		console.log('Showing view |' + key + '| with transition |' + transition.key + '| and options ' + JSON.stringify(props));

		var previous = this.state.currentView;
		var newState = {
			currentView: key,
			previousView: previous,
			viewTransition: transition
		};
		newState[key + '_class'] = 'view';
		newState[key + '_props'] = props;

		if (state) {
			_.extend(newState, state);
		}
		this.setState(newState);		
	},

	jsxNavigation : function () {
		return (
				<ReactCSSTransitionGroup transitionName={this.state.viewTransition.name} transitionEnter={this.state.viewTransition.in} transitionLeave={this.state.viewTransition.out}>
					{this.getCurrentView()}
				</ReactCSSTransitionGroup>
			)
	}
})