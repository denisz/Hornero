/** @jsx React.DOM */

var React 			= require('react/addons');
var UI 				= require('_ui');
var Backbone 		= require('backbone');
var AppDispatcher 	= require('_services').AppDispatcher;
var Creater 		= require('../../../helpers/Creater');
var Actions 		= require('_actions').Editor;
var Composition 	= require('../composition');

var ViewMode 		= require('_constants').modeView;
var Devices 		= require('_constants').devices;
var Viewports 		= require('_constants').viewports; 

//сделать настройки для workspace
//подписать на измение viewport и device
module.exports =  React.createBackboneClass({
	displayName : 'Workspace',

	getDefaultProps : function () {
		return {
			model  : new Backbone.Model({
				device 	: Devices.IPHONE5,
				viewport: Viewports.PHONE,
				mode 	: ViewMode.EDIT 
			})
		}
	},

	getInitialState : function () {
		return {}				
	},

	componentDidMount : function () {
		Actions.load();
	},

	render : function () {
		var model = this.getModel();

		return (
			<UI.FlexLayout className={this.props.viewClassName}>
				<Composition.Device device={model.get('device')}/>
				<Composition.Canvas mode={model.get('mode')} device={model.get('device')} viewport={model.get('viewport')} />
				<Composition.ButtonAppMenu />					
				<Composition.FloatPanel />
				<Composition.Front />			
			</UI.FlexLayout>
			)
	}
})