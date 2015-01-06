/** @jsx React.DOM */
var React = require('react/addons');
var UI = require('touchstonejs').UI;

module.exports =  React.createClass({
	displayName 	: 'Loading',
	
	render : function () {
		return (<UI.FlexLayout className={this.props.viewClassName}>
				<div>Loading</div>
			</UI.FlexLayout>)
	}
})