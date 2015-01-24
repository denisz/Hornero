/** @jsx React.DOM */

var _ 	= require('underscore'),
	React  				= require('react/addons'),
	classnames  		= require('classnames'),
	DialogDelegate  	= require('../../../mixins/DialogDelegate'),
	Tappable  			= require('react-tappable');

module.exports = React.createClass({
	displayName : 'Dialog:ActionButton',
	mixins 		: [DialogDelegate],

	propTypes: {
		className 	: React.PropTypes.string,
		component 	: React.PropTypes.string,
		disabled 	: React.PropTypes.bool,
		onTap 		: React.PropTypes.oneOfType([ React.PropTypes.func, React.PropTypes.string ]),
		label 		: React.PropTypes.string,
		icon 		: React.PropTypes.string
	},

	getDefaultProps: function() {
		return {
			component 	: 'button',
			disabled 	: false
		};
	},

	render : function () {
		var className = classnames(this.props.className, this.props.icon, {
			'action-button': true,
			'disabled': this.props.disabled
		});

		var label  = this.props.label ? <div className="action-button-label">{this.props.label}</div> : null;
		var action = _.isString(this.props.onTap) ? this[this.props.onTap] : this.props.onTap;

		return (
			<Tappable className={className} component={this.props.component} onTap={action}>
				{label}
				{this.props.children}
			</Tappable>
		);
	}
})