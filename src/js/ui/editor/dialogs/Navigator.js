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

	getInitialState : function () {
		return {
			id 		: _.uniqueId('ace_'),
			value 	: this.props.value
		}
	},

	handleChange : function (e, session) {
		var value = session.getValue();

		this.setState({
			value : value
		})
	},

	handleSuccess : function () {
		console.log(this.state.value);
		this.hide();
	},

	render : function () {
		var styles = ReactStyles({
			width  : this.props.width,
			height : this.props.height,
			margin : '0 auto'
		});

		return  (<Dialog.Wrapper styles={styles} className={this.props.viewClassName}>
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
							<Dialog.PanelItem>
								<UI.Icon named="ios-box-outline" />
							</Dialog.PanelItem>
							<Dialog.PanelItem>
								<UI.Icon named="ios-cart-outline" />
							</Dialog.PanelItem>
							<UI.FlexBlock />
							<Dialog.PanelItem>
								<UI.Icon named="ios-gear-outline" />
							</Dialog.PanelItem>
						</Dialog.Panel>
						<Dialog.Content>
							
						</Dialog.Content>
					</Dialog.Body>
				</Dialog.Wrapper>);
	}	
}
)