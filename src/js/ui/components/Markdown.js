/** @jsx React.DOM */

var _ 				  = require('underscore');
var React 	 		= require('react/addons');
var marked 			= require('marked');
var hljs 			  = require('highlight.js');

marked.setOptions({
	breaks : true
});

marked.setOptions({
  highlight: function (code, lang, callback) {
  	var result; 
  	lang = lang || "javascript";

  	result = '<span class="hljs">' + hljs.highlight(lang, code).value + '</span>';

  	return result;
  }
});

module.exports = React.createClass({
	render : function () {
		return (<div className="rendered-markdown" styles={this.props.styles} dangerouslySetInnerHTML={{ __html: marked(this.props.value) }} />)
	}
});