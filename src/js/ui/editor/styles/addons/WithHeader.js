/** @jsx React.DOM */

var React 	 		= require('react/addons');

module.exports = function (component, options) {
	return React.createClass({
		getDefaultProps : function () {
			return options
		},

		render : function () {
			return (<UI.FlexBlock className={this.props.className} height={"auto"}>
						<Component {...this.props} />
						<span>{this.props.children}</span>
					</UI.FlexBlock>);
		}
	})
}