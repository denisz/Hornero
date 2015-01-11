module.exports = {
	isCordova : function () {
		return (typeof cordova !== 'undefined') ? true : false
	},

	findResult : function (arr, iteratee) {
		var result = false;

		for (var i = 0, l = arr.length; i < l; i++) {
			result = iteratee(arr[i]);
			if (result) { break }
		} 

		return result;
	}
}