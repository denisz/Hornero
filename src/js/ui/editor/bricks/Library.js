/** @jsx React.DOM */

var React 		= require('react/addons');
var UI 			= require('_ui');
var Backbone 	= require('backbone');
var BS 			= require('react-bootstrap');
var FloatPanel 	= require('_constants').floatPanel;
var Actions 	= require('_actions').Editor;

var ModeTableView = require('_constants').modeTableView;

module.exports = React.createClass({
	getDefaultProps : function () {
		return {
			filter : new Backbone.Model()
		}
	},

	getInitialState : function () {
		return {
			mode 		: ModeTableView.TABLE,
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
		return <div onClick={handleClick}>{model.get('displayName')}</div>
		
		if (mode === ModeTableView.LIST) {

		} else if (mode === ModeTableView.TABLE) {

		}
	},

	handleClick : function (model) {
		console.log(model);
	},

	handleToggleMode : function (mode) {
		this.setState({mode : mode})
	},

	render : function () {
		return (
				<UI.FlexLayout className={this.props.viewClassName}>
					<UI.Headerbar height="45px">
						<UI.Toggle value={this.state.mode} onChange={this.handleToggleMode} options={[
							{ label: '', value: ModeTableView.LIST,  icon : <BS.Glyphicon glyph="th-list" /> },
							{ label: '', value: ModeTableView.TABLE, icon : <BS.Glyphicon glyph="th-large" /> }
						]} />
					</UI.Headerbar>	
					<UI.FlexBlock scrollable>
						
						<UI.TableView sort={'displayName'} mode={this.state.mode} collection={this.state.collection} factoryItem={this.factoryItem} filter={this.props.filter}></UI.TableView>
						
						<UI.ActionButton showView={FloatPanel.SETTINGS} viewTransition="show-from-right">Right</UI.ActionButton>
						<UI.ActionButton showView={FloatPanel.SETTINGS} viewTransition="show-from-left">Left</UI.ActionButton>
						<UI.ActionButton showView={FloatPanel.SETTINGS} viewTransition="show-from-top">Top</UI.ActionButton>
						<UI.ActionButton showView={FloatPanel.SETTINGS} viewTransition="show-from-bottom">Bottom</UI.ActionButton>

						<UI.ActionButton showView={FloatPanel.SETTINGS} viewTransition="show-from-right">Right</UI.ActionButton>
						<UI.ActionButton showView={FloatPanel.SETTINGS} viewTransition="show-from-left">Left</UI.ActionButton>
						<UI.ActionButton showView={FloatPanel.SETTINGS} viewTransition="show-from-top">Top</UI.ActionButton>
						<UI.ActionButton showView={FloatPanel.SETTINGS} viewTransition="show-from-bottom">Bottom</UI.ActionButton>

						<UI.ActionButton showView={FloatPanel.SETTINGS} viewTransition="fade">Fade</UI.ActionButton>
						<UI.ActionButton showView={FloatPanel.SETTINGS} viewTransition="fade-contract">Fade contract</UI.ActionButton>
						<UI.ActionButton showView={FloatPanel.SETTINGS} viewTransition="fade-expand">Fade Expand</UI.ActionButton>

						<UI.ActionButton onTap={Actions.hideFloatPanel}>Close</UI.ActionButton>

					</UI.FlexBlock>
				</UI.FlexLayout>
			)
	}
})