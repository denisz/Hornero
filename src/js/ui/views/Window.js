/** @jsx React.DOM */

var Creater  = require('../../helpers/Creater');
var Group 	 = require('../components').Group;
var UI 		 = require('touchstonejs').UI;

var View = Creater.createClass({
	displayName : 'Root',

	render : function () {
		var props = this.getSource(),
			model = this.getModel();

		return (<UI.FlexBlock>
					<div>{props.get('text')}</div>
					<Group collection={model.getSubviews()} />
				</UI.FlexBlock>)
	}
});


module.exports = Creater.createFactory(View);