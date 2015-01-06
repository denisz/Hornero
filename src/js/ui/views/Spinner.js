/** @jsx React.DOM */

var Creater  			= require('../../helpers/Creater');
var UI 		 			= require('touchstonejs').UI;
var Spinner 			= require('../components/Spinner');

var View = Creater.createClass({
	displayName : 'Spinner',

	render : function () {
		var attrs = this.getAttributes();

		return (<UI.FlexBlock>
					<div {...attrs}>
						<Spinner spinnerName='circle' />
					</div>
				</UI.FlexBlock>)
	}
});


module.exports = Creater.createFactory(View);