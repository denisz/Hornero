/** @jsx React.DOM */
var React 	= require('react/addons');
var UI 		= require('touchstonejs').UI;

var Spinner = require('../../components/Spinner');

module.exports =  React.createClass({
	displayName 	: 'Loading',
	
	render : function () {
		return (
				<UI.FlexBlock>
					<Spinner />
				</UI.FlexBlock>
			)
	}
})