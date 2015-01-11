/** @jsx React.DOM */
var ReactBackbone 	= require('react.backbone');
var ReactStyle  	= require('react-style');
var React 			= require('react/addons');

module.exports =  ReactBackbone.createBackboneClass({
	render 			: function () {
		var model  = this.getModel(),
			styles = ReactStyle(model.toJSON());
		
		return (<div styles={styles}>{this.props.children}</div>)
	}
})