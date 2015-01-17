/** @jsx React.DOM */
var React 	= require('react/addons');
var UI 		= require('_ui');

module.exports = React.createClass({
	getInitialState: function() {
		return {
		};
	},

	render: function() {
		
		return (
			<UI.FlexLayout className={this.props.viewClassName}>
				
			</UI.FlexLayout>
		);
	}
});