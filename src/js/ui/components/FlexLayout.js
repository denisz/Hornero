var React = require('react/addons');

module.exports = React.createClass({

	displayName: 'FlexContainer',

	propTypes: {
		className: React.PropTypes.string
	},

	getDefaultProps: function() {
		return {
			className		: '',
			direction 		: 'column',
			alignItems 		: 'stretch',
			justifyContent  : 'space-between'
		};
	},

	render: function() {

		var className 		= this.props.className ? ('FlexLayout ' + this.props.className) : 'FlexLayout';
		var direction 		= this.props.direction;  
		var alignItems 		= this.props.alignItems;
		var justifyContent 	= this.props.justifyContent;

		// react does not currently support duplicate properties (which we need for vendor-prefixed values)
		// see https://github.com/facebook/react/issues/2020
		// moved the display properties to css/touchstone/view.less using the class ".FlexLayout"

		// when supported, apply the following:
		// display: '-webkit-box',
		// display: '-webkit-flex',
		// display: '-moz-box',
		// display: '-moz-flex',
		// display: '-ms-flexbox',
		// display: 'flex',

		var inlineStyle = {
			WebkitFlexDirection: direction,
			MozFlexDirection: direction,
			msFlexDirection: direction,
			FlexDirection: direction,
			WebkitAlignItems: alignItems,
			MozAlignItems: alignItems,
			AlignItems: alignItems,
			WebkitJustifyContent: justifyContent,
			MozJustifyContent: justifyContent,
			JustifyContent: justifyContent
		}

		return <div className={className} style={inlineStyle} styles={this.props.styles}>{this.props.children}</div>;

	}

});
