/** @jsx React.DOM */

var Creater  			= require('../../helpers/Creater');
var UI 		 			= require('touchstonejs').UI;
var Spinner 			= require('../components/Spinner');
var Styles 				= require('../components/Styles');
var React 				= require('react/addons');

module.exports = Creater.createView({
	displayName : 'Spinner',

	render : function () {
		var model = this.getModel();

		return (<UI.FlexBlock>
					<Styles model={model.getStyles()}>
						<Spinner spinnerName={model.get('name')} />
					</Styles>
				</UI.FlexBlock>)
	}
});