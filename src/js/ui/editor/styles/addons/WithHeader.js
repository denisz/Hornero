/** @jsx React.DOM */

var React 	 = require('react/addons');
var UI 		 = require('_ui');

module.exports = function (Component, options) {
	return React.createClass({
		getDefaultProps : function () {
			return options
		},

		render : function () {
			return (<UI.FlexBlock className={this.props.className} height={"auto"}>
						{options.header}
						<Component {...this.props} />						
					</UI.FlexBlock>);
		}
	})
}