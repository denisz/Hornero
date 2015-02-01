/** @jsx React.DOM */

var React 			= require('react/addons');
var ActionButton 	= require('./ActionButton');

var Actions 		= require('_actions').Editor;
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

	handleClick : function () {
		Actions.showFloatPanelWith(FloatPanel.SETTINGS, {
			model : this.props.model
		});
	},

	render : function () {
		return (<div className="b-pivot-edit">
					<ActionButton component="a" className="e-pivot-edit" onTap={this.handleClick}>
						edit
					</ActionButton>
				</div>)
	 }

})