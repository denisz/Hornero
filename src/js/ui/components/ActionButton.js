var React  				= require('react/addons'),
	classnames  		= require('classnames'),
	Tappable  			= require('react-tappable');

module.exports = React.createClass({
	displayName : 'ActionButton',
	propTypes: {
		className: React.PropTypes.string,
		component: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		onTap: React.PropTypes.func,
		label: React.PropTypes.string,
		icon: React.PropTypes.string
	},
	getDefaultProps: function() {
		return {
			component: 'button',
			disabled: false
		};
	},
	render: function() {
		var className = classnames(this.props.className, this.props.icon, {
			'action-button': true,
			'disabled': this.props.disabled
		});

		var label 	= this.props.label ? <div className="action-button-label">{this.props.label}</div> : null;
		var action 	= this.props.onTap;

		return (
			<Tappable className={className} component={this.props.component} onTap={action}>
				{label}
				{this.props.children}
			</Tappable>
		);
	}
});
