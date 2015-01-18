/** @jsx React.DOM */

var _ 				= require('underscore');
var React 	 		= require('react/addons');
var UI 		 		= require('_ui');
var Dialog 			= require('_dialog');

module.exports = React.createClass({
	render : function () {
		return  (<Dialog.Wrapper>
					<Dialog.Header>
						<Dialog.CloseButton/>
						<Dialog.Title>Test</Dialog.Title>
					</Dialog.Header>
					<Dialog.Body></Dialog.Body>
				</Dialog.Wrapper>);
	}
})