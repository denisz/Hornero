/** @jsx React.DOM */

var React 		= require('react/addons');
var UI 			= require('_ui');
var Backbone 	= require('backbone');
var BS 			= require('react-bootstrap');
var FloatPanel 	= require('_constants').floatPanel;

var NavigationDelegate = require('../../../mixins/NavigationDelegate');

module.exports = React.createClass({
	mixins : [NavigationDelegate],
	
	componentDidMount : function () {
		console.log(this.context);
	},

	render : function () {
		return (<UI.FlexLayout className={this.props.viewClassName}>
					<UI.FlexBlock>
						<UI.NavigationAction showView={FloatPanel.LIBRARY} viewTransition="show-from-right">Right</UI.NavigationAction>
						<UI.NavigationAction showView={FloatPanel.LIBRARY} viewTransition="show-from-left">Left</UI.NavigationAction>
						<UI.NavigationAction showView={FloatPanel.LIBRARY} viewTransition="show-from-top">Top</UI.NavigationAction>
						<UI.NavigationAction showView={FloatPanel.LIBRARY} viewTransition="show-from-bottom">Bottom</UI.NavigationAction>
					</UI.FlexBlock>
				</UI.FlexLayout>)
	}
})