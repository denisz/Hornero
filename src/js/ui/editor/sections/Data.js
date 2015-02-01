/** @jsx React.DOM */
var React 	= require('react/addons');
var UI 		= require('_ui');

module.exports = React.createClass({
	getInitialState: function() {
		console.log('styles sections data');
		return {};
	},

	render: function() {
		
		return (
			<UI.FlexLayout className={this.props.viewClassName}>
				
			</UI.FlexLayout>
		);
	}
});