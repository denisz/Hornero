var dispatcher 	= require('../services/AppDispatcher');

module.exports = function (props) {
	//проверить action
	//проверить source
	dispatcher.dispatch(props);
}