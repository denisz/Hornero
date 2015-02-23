/** @jsx React.DOM */

var React 	 		= require('react/addons');
var classnames 		= require('classnames');

module.exports = React.createClass({
	getDefaultProps : function () {
		return {
			prefix 	: "ion-",
			named 	: 'ios-close-empty'
		}
	},

	render : function () {
		var className = classnames("icon", this.props.prefix + this.props.named, this.props.className);
		return (<i {...this.props} className={className} />)
	}
})