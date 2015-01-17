/** @jsx React.DOM */

var React           = require('react/addons');
var IGroup          = require('../../mixins/IGroup');

module.exports =  React.createClass({
    render : function () {
        return React.DOM.img({
            src: this.props.src
        });
    }
})