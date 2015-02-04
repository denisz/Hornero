/** @jsx React.DOM */

var Creater 		= require('../../../helpers/Creater');
var _ 				= require('underscore');
var React 	 		= require('react/addons');
var UI 		 		= require('_ui');
var Dialog 			= require('_dialog');
var BS 				= require('react-bootstrap');
var ReactStyles 	= require('react-style');


module.exports = Creater.createDialog({
	size : {
		width : window.innerWidth,
		height: window.innerHeight	
	},

	getDefaultProps : function () {
		var size = this.getSize();

		return {
			width  : size.width,
			height : size.height
		}
	},

	render : function () {
		return (<Dialog.Wrapper>
					<Dialog.Header className="vertical-border-bottom">
						<Dialog.CloseButton />
						<Dialog.Title>Markdown Editor</Dialog.Title>
						<Dialog.HeaderItem className="b-dialog_faq">
							<UI.Icon named="ios-lightbulb-outline" />
						</Dialog.HeaderItem>
					</Dialog.Header>
					<Dialog.Body>
						<Dialog.Panel className="vertical-border-right">
							<Dialog.PanelItem>
								<UI.Icon named="ios-compose-outline" />
							</Dialog.PanelItem>
						</Dialog.Panel>
					</Dialog.Body>
				</Dialog.Wrapper>)
	}
})