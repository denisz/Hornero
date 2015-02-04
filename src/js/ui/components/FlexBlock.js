var React = require('react/addons'),
	classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'FlexBlock',
	propTypes: {
		className 	: React.PropTypes.string,
		height 		: React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.number ]),
		scrollable 	: React.PropTypes.bool
	},

	getDefaultProps: function() {
		return {
			className 	: '',
			height 		: ''
		};
	},

	render: function() {
		var className = classnames((this.props.scrollable ? 'springy-scrolling' : ''), this.props.className);
		var inlineStyle = {};

		// set height on blocks if provided
		if (this.props.height) {
			inlineStyle.height = this.props.height;
			inlineStyle.minHeight = this.props.height;

		} else if (this.props.width) {
			inlineStyle.width 		= this.props.width;
			inlineStyle.minWidth 	= this.props.width;

		// otherwise stretch to take up space
		} else {
			inlineStyle.WebkitBoxFlex = '1 1 auto';
			inlineStyle.WebkitFlex 	 = '1 1 auto';
			inlineStyle.MozBoxFlex  = '1 1 auto';
			inlineStyle.MozFlex    = '1 1 auto';
			inlineStyle.MsFlex    = '1 1 auto';
			inlineStyle.flex     = '1 1 auto';
		}

		// allow blocks to be scrollable
		if (this.props.scrollable) {
			inlineStyle.overflowY = 'auto';
			inlineStyle.WebkitOverflowScrolling = 'touch';
		}

		//relative block
		if (this.props.relative) {
			inlineStyle.position = 'relative';
		}

		return <div className={className} styles={this.props.styles} style={inlineStyle}>{this.props.children}</div>;
	}
});
