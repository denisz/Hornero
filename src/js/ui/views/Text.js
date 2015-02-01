/** @jsx React.DOM */

var Creater 	= require('../../helpers/Creater');
var React 		= require('react/addons');
var UI 		 	= require('_ui');

module.exports = Creater.createView({
	displayName : 'Text',

	render  	: function () {
		var props = this.getSource(),
			model = this.getModel(),
			attrs = this.getAttributes();
		
		return (<UI.Styles model={model.getStyles()} componentClass={UI.FlexBlock}>
					<div>{props.get('text')}</div>
					<UI.BuildHelper mode={this.state.mode}>
						<UI.PivotEdit model={model} />
					</UI.BuildHelper>
				</UI.Styles>)
	}
});