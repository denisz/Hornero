module.exports = {
	isCordova : function () {
		return (typeof cordova !== 'undefined') ? true : false
	}
}