/** @jsx React.DOM */

var React 					= require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var ReactStyle  	= require('react-style');
var classnames 		= require('classnames');
var Transitions 	= require('../../mixins/Transitions');
var UI 				= require('touchstonejs').UI;

var Tappable 		= require('react-tappable');

module.exports =  React.createClass({
	mixins : [Transitions],

	propTypes: {
		side 			: React.PropTypes.string,
		width 			: React.PropTypes.number,
		height 			: React.PropTypes.number,
		showTransition 	: React.PropTypes.string,
		hideTransition 	: React.PropTypes.string,
		isOpened 		: React.PropTypes.bool,
		overlay 		: React.PropTypes.bool
	},

	getDefaultProps : function () {
		return {
			overlay 		: true,
			side 			: 'right', //right|bottom|left|top
			isOpened  		: true,
			position 		: 'center'
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
			isOpened 			: this.props.isOpened,

			showTransition 		: this.getViewTransition('show-panel-' 	 + this.props.side),
			hideTransition 		: this.getViewTransition('reveal-panel-' + this.props.side),

			overlayTransition 	: this.getViewTransition('show-overlay-fade'),

		}
	},

	componentWillReceiveProps : function (nextProps) { 
		this.setState({
			isOpened 		: nextProps.isOpened
		})
	},

	toggle: function() {
    	this.setState({ isOpened: !this.state.isOpened });
  	},

  	close: function() {
    	this.setState({ isOpened: false });    	
  	},

  	open: function() {
    	this.setState({ isOpened: true });
  	},

  	_wrapChild : function () {
  		if (this.state.isOpened) {

  			var className 	= classnames('e-side_bar_content', 'm-position-' + this.props.position, 'm-side-' + this.props.side, {
					'm-opened' : this.state.isOpened
				});

			var styles = ReactStyle({
				width : this.props.width,
				height: this.props.height
			});

			return (<div className={className} styles={styles}>{this.props.children}</div>)
  		} 

  		return null;
  	},

  	_overlay : function () {
  		if (this.props.overlay && this.state.isOpened) {
  			return <Tappable className="modal-backdrop in overlay-wrapper" onTap={this.close}></Tappable>;	
  		}

  		return null
  	},

  	render 			: function () {
		var viewTransition 		= this.state.isOpened ? this.state.showTransition : this.state.hideTransition;
		var overlayTransition 	= this.state.overlayTransition;
		var children 			= this._wrapChild();
		var overlay 			= this._overlay();

		return (
			<span className="e-side_bar">
				<ReactCSSTransitionGroup transitionName={overlayTransition.name} transitionEnter={overlayTransition.in} transitionLeave={overlayTransition.out}>
					{overlay}
				</ReactCSSTransitionGroup>
				<ReactCSSTransitionGroup transitionName={viewTransition.name} transitionEnter={viewTransition.in} transitionLeave={viewTransition.out}>
					{children}
				</ReactCSSTransitionGroup>
			</span>
		)
	}
})