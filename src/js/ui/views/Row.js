/** @jsx React.DOM */

var Creater 	= require('../../helpers/Creater');
var UI 		 	= require('_ui');
var React 		= require('react/addons');
var BS 			= require('react-bootstrap');

var Group 		= require('./Group');

module.exports = Creater.createView({
	displayName : 'Container',

	handleClick : function () {
		console.log(12)
	},

	render  	: function () {
		var props = this.getSource(),
			model = this.getModel();
		
		return (<UI.FlexBlock>
					<UI.Styles model={model.getStyles()}>
						<BS.Grid fluid>
							<Group collection={model.getSubviews()} componentClass={BS.Row}/>
						</BS.Grid>
					</UI.Styles>
					<UI.BuildHelper mode={this.state.mode}>
						<UI.ActionButton onTap={this.handleClick}>Add content</UI.ActionButton>
					</UI.BuildHelper>
				</UI.FlexBlock>)
	}
});