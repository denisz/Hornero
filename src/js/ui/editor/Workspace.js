/** @jsx React.DOM */

var React 			= require('react/addons');
var UI 				= require('touchstonejs').UI;
var AppDispatcher 	= require('../../services/AppDispatcher');
var Creater 		= require('../../helpers/Creater');
var Actions 		= require('../../actions').Editor;
var Components 		= require('../components')

module.exports =  React.createClass({
	displayName : 'Workspace',

	createWindowView : function () {
		var windowView = Creater.createWindow({ text : 'Hi!'});
		Store.attachModel( windowView.props.model );

		return windowView;
	},

	getInitialState : function () {
		return {
			windowView : this.createWindowView()
		}
	},

	componentDidMount : function () {
		Actions.load();
	},

	render : function () {
		return (
			<UI.FlexLayout className={this.props.viewClassName}>
				<UI.FlexBlock>
					{this.state.windowView}
				</UI.FlexBlock>
			</UI.FlexLayout>
			)
	}
})