/** @jsx React.DOM */
var React 					= require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var ReactStyle  	= require('react-style');
var classnames 		= require('classnames');
var Transitions 	= require('../../mixins/Transitions');
var UI 				= require('touchstonejs').UI;

var DEFAULT_TRANSITION_SHOW  = 'show-panel-right';
var DEFAULT_TRANSITION_HIDE  = 'reveal-panel-right';

module.exports =  React.createClass({
	mixins : [Transitions],
	propTypes: {
		docked 	: React.PropTypes.bool
	},

	getDefaultProps : function () {
		return {
			overlay 		: true,
			side 			: 'right',
			width   		: 300,
			isOpened  		: true ,
			showTransition  : DEFAULT_TRANSITION_SHOW,
			hideTransition 	: DEFAULT_TRANSITION_HIDE
		}
	},

	/*
		'show-from-left',
		'show-from-right',
		'show-from-top',
		'show-from-bottom',
		'reveal-from-left',
		'reveal-from-right',
		'reveal-from-top',
		'reveal-from-bottom'
	*/

	getInitialState : function () {
		return {
			showTransition 	: this.getViewTransition(this.props.showTransition),
			hideTransition 	: this.getViewTransition(this.props.hideTransition),
		}
	},

	toggle: function() {
    	this.setProps({ isOpened: !this.props.isOpened });
    	return this;
  	},

  	close: function() {
    	this.setProps({ isOpened: false });
    	return this;
  	},

  	open: function() {
    	this.setProps({ isOpened: true });
    	return this;
  	},

	render 			: function () {
		var className = classnames('e-side_bar', 'm-side-' + this.props.side, {
			'm-opened' : this.props.isOpened
		});

		var styles = ReactStyle({
			width : this.props.width
		});

		var viewTransition = this.props.isOpened ? this.state.showTransition : this.state.hideTransition;
		var children = this.props.isOpened ? (<div className={className} styles={styles}>
					{this.props.children}
				</div> ) : null;

		return (
			<ReactCSSTransitionGroup transitionName={viewTransition.name} transitionEnter={viewTransition.in} transitionLeave={viewTransition.out}>
				{children}
			</ReactCSSTransitionGroup>
		)
	}
})