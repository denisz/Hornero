/** @jsx React.DOM */

var Creater 	= require('../../helpers/Creater');
var UI 		 	= require('_ui');
var Group 	 	= require('./Group');
var React 		= require('react/addons');

var Actions 	= require('_actions').Editor;
var floatPanel 	= require('_constants').floatPanel;
var Filter 		= require('_models').Filter;

var Slider 		= require('react-slick');

var settingsPick = [ "dots", "infinite", "speed", "slidesToShow", "slidesToScroll" ];

module.exports = Creater.createView({
	displayName : 'Slick',

	handleClick : function () {
		//добавляем новый слик item без выбор
		Actions.showFloatPanelWith(floatPanel.LIBRARY, {
			model : this.props.model,
			filter: new Filter({
				displayName : Filter.oneOf(['SlickItem'])
			})
		});
	},

	_getEmpty 	: function () {
		return (<UI.BuildHelper mode={this.state.mode}>
					<UI.ActionButton onTap={this.handleClick}>Add content to Slick</UI.ActionButton>
				</UI.BuildHelper>)
	},

	render  	: function () {
		var props = this.getSource(),
			model = this.getModel();

		var settings = 	model.pick(settingsPick);
		
		return (<UI.Styles model={model.getStyles()} componentClass={UI.FlexBlock}>
					<Group collection={model.getSubviews()} componentClass={Slider} {...settings}>
						{this._getEmpty()}
					</Group>
				</UI.Styles>)
	}
});

