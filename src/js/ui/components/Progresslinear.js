/** @jsx React.DOM */
var React 			= require('react/addons');
var ReactStyle  	= require('react-style');
var classnames 		= require('classnames');

module.exports = React.createClass({
	getDefaultProps : function() {
		return {
			viewClassName 	: 'loader-linear',
			height 			: 4,
			label 			: 'Getting your files',
			width 			: 200,
			theme 			: 'blue'
		}
	},

	getInitialState : function () {
		return {
			active : true
		}
	},

	render : function () {
		var inlineStylesDiv = ReactStyle({
			width  	: this.props.width
		});

		var inlineStyleSvg = ReactStyle({
			height 	: this.props.height
		});

		var classNames = classnames({
			active :  this.state.active,
		}, this.props.viewClassName, 'theme-' + this.props.theme);

		return (<div className={classNames} styles={inlineStylesDiv}>
				  <div className="label">{this.props.label}</div>	
				  <svg className="linear" styles={inlineStyleSvg}>
				    <line x1="0" y1={this.props.height / 2} x2={this.props.width} y2={this.props.height / 2} className="path" fill="none" strokeWidth={this.props.height} strokeMiterlimit="0"/>
				  </svg>
				</div>)
	}
})