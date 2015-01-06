/** @jsx React.DOM */
var React 			= require('react/addons');
var ReactStyle  	= require('react-style');
var classnames 		= require('classnames');

module.exports = React.createClass({
	getDefaultProps : function() {
		return {
			viewClassName 	: 'loader-circle',
			theme 			: 'blue'
		}
	},

	getInitialState : function () {
		return {
			active : true
		}
	},

	render : function () {
		var inlineStyles = ReactStyle({
			width  	: this.props.width,
			height 	: this.props.height
		});

		var classNames = classnames({
			active : this.state.active
		}, this.props.viewClassName, 'theme-' + this.props.theme)

		return (<div className={classNames}>
				  <svg className="circular">
				    <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
				  </svg>
				</div>)
	}
})