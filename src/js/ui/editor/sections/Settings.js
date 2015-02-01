/** @jsx React.DOM */

var React 		= require('react/addons');
var UI 			= require('_ui');
var Backbone 	= require('backbone');
var BS 			= require('react-bootstrap');
var _ 			= require('underscore');
var FloatPanel 	= require('_constants').floatPanel;

var buildSettings  		= require('_settings:build');
var NavigationDelegate 	= require('../../../mixins/NavigationDelegate');
var DEFAULT_BUILD 		= buildSettings['Empty'];


var sections = require('_constants').settingsSections;

var views = {};
views[sections.STYLES] 		= require('./Styles');
views[sections.CONTENTS] 	= require('./Contents');
views[sections.DATA] 		= require('./Data');


module.exports = React.createClass({
	mixins : [NavigationDelegate],
	
	propTypes: {
		model 		: React.PropTypes.object.isRequired,
		currentView : React.PropTypes.string 
	},

	getDefaultProps : function () {
		return {
			currentView : null
		};
	},

	getInitialState : function () {
		return {
			currentView 	: this.getStartActiveSection(),
			mode 			: this.getStartActiveSection(),
			viewTransition 	: 'show-from-right',
			viewProps 		: this.getViewProps()
		}
	},

	getViewProps : function () {
		return { model : this.props.model }	
	},

	getStartActiveSection : function () {
		if (this.props.currentView) {
			return this.props.currentView
		}

		var sections = this.getSections();
		return _.first(sections);
	},

	getSettings : function () {
		var displayName = this.props.model.get('displayName');
		return buildSettings[displayName] || DEFAULT_BUILD;
	},

	getSections : function () {
		var settings = this.getSettings();
		return settings['sections'];
	},

	handleToggleMode : function (value) {
		this.setState({
			currentView  	: value,
			mode 			: value					
		})
	},

	render : function () {
		var options 		= _.map(this.getSections(), function (section) { return  { label: section.toLowerCase(), value: section} })
		var navigationProps = _.pick(this.state, 'currentView', 'viewTransition', 'viewProps');

		return (<UI.FlexLayout className={this.props.viewClassName}>
					<UI.Headerbar height="45px">
						<UI.Toggle value={this.state.mode} onChange={this.handleToggleMode} options={options} />
					</UI.Headerbar>	
					<UI.FlexBlock relative>
						<UI.Navigation views={views} {...navigationProps} />
					</UI.FlexBlock>
				</UI.FlexLayout>)
	}
})