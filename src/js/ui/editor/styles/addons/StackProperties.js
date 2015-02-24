/** @jsx React.DOM */

var _ 				= require('underscore');
var React 	 		= require('react/addons');
var Header 			= require('../HeaderStack');
var SelectMirror 	= require('./SelectMirror');
var UI 				= require('_ui');

module.exports = function (component, options) {

	return React.createBackboneClass({
		getDefaultProps : function () {
			return {
				defines : options.defines,
				label  	: options.label
			}
		},

		handleAdd : function (style) {
			var model = this.getModel();
			
			if (!model.has(style)) {
				model.set(style, "1px solid #757575");	
			}
		},

		_createField : function (options) {
			return React.createElement(component, options);
		},

		prepareOptions : function (options) {
			return _.extend(options, _.pick(this.props, ['model', 'modelView']));
		},

		onModelChange : function () {
			var model = this.getModel();
			_.some(this.props.defines, model.hasChanged.bind(model)) && this.forceUpdate();
		},

		getFields : function () {
			var fields  = [],
				model 	= this.getModel(), 
				defines = this.props.defines;

			for (var i = 0, l = defines.length; i < l; i++) {
				if (model.has(defines[i])) {
					var options = this.prepareOptions({
						label 		: defines[i],
						key 		: defines[i],
						property 	: defines[i]
					});

					fields.push(this._createField(options));
				}				
			}
			
			return fields;
		},

		getHeader : function () {
			return React.createElement(Header, { onChange : this.handleAdd, label : this.props.label, defines : SelectMirror(this.props.defines)})
		},

		render : function () {
			var fields = this.getFields();
			var header = this.getHeader();

			return (<UI.FlexBlock className={this.props.className} height={"auto"}>
						{header}
						<span>{fields}</span>
					</UI.FlexBlock>);
		}
	})
};