/** @jsx React.DOM */

var React 	 		= require('react/addons');
var classnames 		= require('classnames');

module.exports = React.createClass({
	getDefaultProps : function () {
		return {
			set 	: "ion-",
			named 	: 'ios-close-empty'
		}
	},

	render : function () {
		var className = classnames("icon", this.props.set + this.props.named, this.props.className, {
			dark  : this.props.dark,
			light : this.props.light
		});
		return (<i {...this.props} className={className} />)
	}
})