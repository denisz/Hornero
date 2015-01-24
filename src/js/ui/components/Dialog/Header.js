/** @jsx React.DOM */

var _ 	= require('underscore'),
	UI 					= require('_ui'),
	React  				= require('react/addons'),
	classnames  		= require('classnames');

module.exports = React.createClass({
	displayName : "Dialog:Header",
	
	render : function () {
		var className = classnames("b-dialog_header", this.props.className);

		return (<UI.FlexBlock height="60px"  {...this.props} className={className} >
					<UI.FlexLayout direction="row">
						{this.props.children}
					</UI.FlexLayout>
				</UI.FlexBlock>)
	}
})