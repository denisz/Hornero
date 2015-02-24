/** @jsx React.DOM */

var React 			= require('react/addons');
var ActionButton 	= require('./ActionButton');

var Editor 			= require('_actions').Editor;
var View 			= require('_actions').View;
var FloatPanel 		= require('_constants').floatPanel;


module.exports = React.createClass({
	displayName 	: "PivotEdit",

	propTypes: {
		model : React.PropTypes.object.isRequired
	},

	getDefaultProps : function () {
		return {
			model : null	
		}
	},

	handleClickEdit : function () {
		Editor.showFloatPanelWith(FloatPanel.SETTINGS, {
			model : this.props.model
		});
	},

	handleClickRemove : function () {
		var id = this.props.model.get('id');
		View.remove(id);
	},	

	render : function () {
		return (<div className="b-pivot-edit">
					<ActionButton component="a" className="e-pivot-edit" onTap={this.handleClickEdit}>
						edit
					</ActionButton>
					<ActionButton component="a" className="e-pivot-remove" onTap={this.handleClickRemove}>
						remove
					</ActionButton>
				</div>)
	 }

})