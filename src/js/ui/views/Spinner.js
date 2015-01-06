/** @jsx React.DOM */

var Creater  			= require('../../helpers/Creater');
var UI 		 			= require('touchstonejs').UI;
var Spinner 			= require('react-spinkit');

var View = Creater.createClass({
	displayName : 'Spinner',

	render : function () {
		var attrs = this.getAttributes();
		
		return (<UI.FlexBlock {...attrs}>
					<Spinner spinnerName='cube-grid' />
				</UI.FlexBlock>)
	}
});


module.exports = Creater.createFactory(View);