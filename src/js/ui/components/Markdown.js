/** @jsx React.DOM */

var _ 				= require('underscore');
var React 	 		= require('react/addons');
var marked 			= require('marked');

module.exports = React.createClass({
	render : function () {
		return (<div className="content-markdown" styles={this.props.styles} dangerouslySetInnerHTML={{ __html: marked(this.props.value) }} />)
	}
});