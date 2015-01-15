/** @jsx React.DOM */

var Creater 		= require('../../helpers/Creater');
var IGroup 			= require('../../mixins/IGroup');
var ViewContextTypes = require('../../mixins/ViewContextTypes');

module.exports =  Creater.createView({
	mixins : [IGroup]
})