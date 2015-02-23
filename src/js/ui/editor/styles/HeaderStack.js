/** @jsx React.DOM */

var _ 				= require('underscore');
var React 	 		= require('react/addons');
var UI 		 		= require('_ui');
var BS 				= require('react-bootstrap');
var classnames 		= require('classnames');

module.exports = React.createClass({

	getDefaultProps : function () {
		return {
			label 		: null,
			defines 	: [],
			onChange 	: null
		}
	},

	handleChange : function (e) {
		if (typeof this.props.onChange === 'function') {
			this.props.onChange(e.target.value);
		}
	},

	render : function () {
		var popover = (<BS.Popover>
							<select name="select" onChange={this.handleChange}>
								{this.props.defines.map( function(item) {
									 return <option value={item.value}>{item.label}</option>
								})}
							</select>
						</BS.Popover>);

		return (<div className="field-header">
					<UI.FlexLayout direction="row">
						<UI.FlexBlock>{this.props.label}</UI.FlexBlock>
						<UI.FlexBlock>
							<BS.OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
								<UI.Icon named="ios-plus-outline" />
				      		</BS.OverlayTrigger>
				      	</UI.FlexBlock>
					</UI.FlexLayout>
				</div>);
	}
});