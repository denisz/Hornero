/** @jsx React.DOM */

var Creater 		= require('../../../helpers/Creater');
var _ 				= require('underscore');
var React 	 		= require('react/addons');
var UI 		 		= require('_ui');
var Dialog 			= require('_dialog');
var CodeMirror 		= require('react-codeMirror');
var BS 				= require('react-bootstrap');
var ReactStyles 	= require('react-style');
var loremIpsum 		= require('_data').LoremIpsumMarkdown;

var HEIGHT_HEADER = 60;

module.exports = Creater.createDialog({
	size : {
		width : window.innerWidth,
		height: window.innerHeight	
	},

	getDefaultProps : function () {
		var size = this.getSize();

		return {
			width  : size.width,
			height : size.height,
			value  : loremIpsum
		}
	},

	getInitialState : function () {
		return {
			id 		: _.uniqueId('ace_'),
			value 	: this.props.value
		}
	},

	handleChange : function (e, session) {
		var value = e.getValue();

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

		var height = this.props.height - HEIGHT_HEADER; 

		var size = ReactStyles({
			width : (this.props.width - 20 ) / 2,
			height: height
		});

		return  (<Dialog.Wrapper styles={styles} className={this.props.viewClassName}>
					<Dialog.Header className="vertical-border-bottom">
						<Dialog.CloseButton />
						<Dialog.HeaderItem onTap={this.handleSuccess}>
							<UI.Icon named="android-done" />
						</Dialog.HeaderItem>
						<Dialog.Title>Markdown Editor</Dialog.Title>
					</Dialog.Header>
					<Dialog.Body>
						<Dialog.Content scrollable>
							<BS.Grid fluid>
								<BS.Row className="b-header">
									<BS.Col md={6} xs={6}>Markdown</BS.Col>
									<BS.Col md={6} xs={6}>Preview</BS.Col>
								</BS.Row>
								<BS.Row>
									<BS.Col styles={ReactStyles({minHeight : height})} md={6} xs={6} className="vertical-border-right">						
							 			<CodeMirror mode="markdown" styles={size} name={this.state.id} change={this.handleChange} value={this.state.value}/>
							 		</BS.Col>
							 		<BS.Col md={6} xs={6}>
						 				<UI.Markdown value={this.state.value}/>
							 		</BS.Col>
							 	</BS.Row>
							 </BS.Grid>
						</Dialog.Content>
					</Dialog.Body>
				</Dialog.Wrapper>);
	}	
}
)