/** @jsx React.DOM */

var _ 						= require('underscore');
var React 					= require('react/addons');
var Transitions 			= require('../../mixins/Transitions');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var UI 						= require('touchstonejs').UI;
var DEFAULT_TRANSITION 		= 'none';
var classnames 				= require('classnames');
var NavigationContextTypes	= require('../../mixins/NavigationContextTypes');


module.exports = React.createClass({
	displayName : 'Navigation',

	mixins : [Transitions, NavigationContextTypes.parentContext],

	propTypes: {
		viewTransition  : React.PropTypes.string,
		currentView 	: React.PropTypes.string,
		viewProps 		: React.PropTypes.object,
		views 			: React.PropTypes.object.isRequired
	},

	getDefaultProps : function () {
		return {
			viewTransition: DEFAULT_TRANSITION
		}
	},

	getInitialState : function () {
		return  _.defaults( {
			key 			: _.uniqueId('nav_'),
			currentView 	: this.props.currentView,
			viewProps 		: this.props.viewProps,
			viewTransition  : this.getViewTransition(this.props.viewTransition)
		})
	},

	getChildContext: function() {
		return {
			navigation 	: this			
		}
	},

	getCurrentView: function() {
		var views = {};
		views[this.state.currentView + this.state.key] = this._getView(this.state.currentView);

		return views;
	},

	_getView: function(key) {
			
		var views = this.props.views || {},
			view  = views[key],
			props = _.extend({}, this.state['viewProps']);
		
		if (!view) {
			return (
				<UI.FlexLayout className="view">
					<UI.FlexBlock>
						<UI.Feedback actionFn={this.handleFallback} iconKey="ion-alert-circled" iconType="danger" text={'Sorry, the view <strong>"' + this.state.currentView + '"</strong> is not available.'} actionText="Okay" />
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
			keyName  	 : key, 
			viewClassName: this.state[key + '_class'] || 'view'
		}))
	},

	handleFallback : function () {
		console.log('not found');
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
		newState['viewProps'] = props;

		if (state) {
			_.extend(newState, state);
		}

		this.setState(newState);		
	},

	back : function () {

	},

	componentWillReceiveProps : function (nextProps) {
		nextProps = _.defaults(nextProps, {
			viewTransition: DEFAULT_TRANSITION
		});

		var nextState = {
			key 			: _.uniqueId('nav_'),
			currentView 	: nextProps.currentView,
			viewProps 		: nextProps.viewProps,
			viewTransition  : this.getViewTransition(nextProps.viewTransition)	
		};

		console.log('Receive props navigation | showing view | %s | with transition | %s | and options %s', nextState.currentView, nextState.viewTransition.key, JSON.stringify(nextProps.viewProps));

		this.setState(nextState);
	},

	render : function () {
		var className  = classnames('navigation-wrapper', this.props.viewClassName);

		return (
				<div className={className}>
					<ReactCSSTransitionGroup transitionName={this.state.viewTransition.name} transitionEnter={this.state.viewTransition.in} transitionLeave={this.state.viewTransition.out}>
						{this.getCurrentView()}
					</ReactCSSTransitionGroup>
				</div>
			)
	}
})
