/** @jsx React.DOM */

var Creater  			= require('../../helpers/Creater');
var UI 		 			= require('_ui');
var React 				= require('react/addons');

module.exports = Creater.createView({
	displayName : 'Spinner',

	render : function () {
		var model = this.getModel();

		return (<UI.FlexBlock>
					<UI.Styles model={model.getStyles()}>
						<UI.Spinner spinnerName={model.get('name')} />
					</UI.Styles>
				</UI.FlexBlock>)
	}
});