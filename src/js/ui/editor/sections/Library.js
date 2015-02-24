/** @jsx React.DOM */

var React 		= require('react/addons');
var UI 			= require('_ui');
var Backbone 	= require('backbone');
var BS 			= require('react-bootstrap');
var FloatPanel 	= require('_constants').floatPanel;
var View   		= require('_actions').View;
var Editor 		= require('_actions').Editor;

var ModeTableView = require('_constants').modeTableView;

module.exports = React.createClass({
	getDefaultProps : function () {
		return {
			filter : new Backbone.Model()
		}
	},

	propTypes: {
		model 		: React.PropTypes.object.isRequired		
	},

	getInitialState : function () {
		return {
			mode 		: ModeTableView.LIST,
			collection 	: new Backbone.Collection([], { model : Backbone.Model }),	
		}
	},

	componentDidMount : function () {
		var namesView  	= _.keys(HelperView.getAllViews());
		var views 		= _.map(namesView, function (name) {
			return {
				displayName : name,
				id 			: name
			}
		});

		this.state.collection.set(views);
	},

	factoryItem : function (model, mode) {
		var handleClick = this.handleClick.bind(this, model);
		
		return  (<UI.ActionButton className="list-item" component="div" onTap={handleClick}>
						<span className="item-media">
							<span className="item-icon">
								<UI.Icon named="disc" className="lg" dark/>
							</span>
						</span>
						<div className="item-inner">
							<div className="item-content">
								<div className="item-title">{model.get('displayName')}</div>
								<div className="item-subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
							</div>
						</div>
					</UI.ActionButton >);

	},

	handleClick : function (model) {
		var parentModel = this.props.model,
			displayName = model.get('displayName'),
			parentID 	= parentModel.get('id');

		View.addWithName(displayName, parentID);
		Editor.hideFloatPanel();
	},

	handleToggleMode : function (mode) {
		this.setState({mode : mode})
	},

	render : function () {
		return (
				<UI.FlexLayout className={this.props.viewClassName}>
					<UI.FlexBlock scrollable className="library-view">
						<UI.TableView sort={'displayName'} mode={this.state.mode} collection={this.state.collection} factoryItem={this.factoryItem} filter={this.props.filter}></UI.TableView>
					</UI.FlexBlock>
				</UI.FlexLayout>
			)
	}
})