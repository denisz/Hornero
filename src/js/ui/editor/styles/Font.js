/** @jsx React.DOM */

var Creater 		= require('../../../helpers/Creater');
var _ 				= require('underscore');
var React 	 		= require('react/addons');
var UI 		 		= require('_ui');
var BS 				= require('react-bootstrap');
var ReactStyles 	= require('react-style');

var Addons 	= require('_styles:addons')

module.exports = Creater.createStyle({
	mixins : [Addons.LinkedModelMixin],

	render : function () {
		return (<UI.FlexBlock className={this.props.className} height={"auto"}>
					Font
				</UI.FlexBlock>)
	}
});