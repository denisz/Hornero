/** @jsx React.DOM */
var React 			= require('react/addons');
var UI 				= require('_ui');
var buildSettings  	= require('_settings:build');
var styles 			= require('_settings:styles');
var _ 				= require('underscore');

var DEFAULT_BUILD 	= buildSettings['Empty'];

module.exports = React.createClass({
	propTypes: {
		model 		: React.PropTypes.object.isRequired		
	},

	getInitialState: function() {
		return {
			fields : this.getStylesField()
		};
	},

	createField : function (key) {
		var view = styles[key], props = {};

		return React.createElement(view, _.extend(props, {
			navigation   : this,
			key	  	 	 : key, 
			className 	 : 'style-view',
			model 		 : this.props.model
		}))
	},

	getSettings : function () {
		var displayName = this.props.model.get('displayName');
		return buildSettings[displayName] || DEFAULT_BUILD;
	},

	getStylesField : function () {
		if (this.props.fields) {
			return this.props.fields
		}

		var settings = this.getSettings();
		return settings.styles;
	},

	_stylesFilled : function () {
		return _.map(this.state.fields, this.createField);
	},

	render: function() {
		var fields = this._stylesFilled();
		
		return (
			<UI.FlexLayout className={this.props.viewClassName}>
				<UI.FlexBlock scrollable>{fields}</UI.FlexBlock>
			</UI.FlexLayout>
		);
	}
});