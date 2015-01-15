var HelperPayload = {
	getData : function (payload) {
		return payload.data
	},

	getAction : function (payload) {
		return payload.action
	},

	getProperty : function (payload, property) {
		return payload.data[property]
	},

	deleteProperty : function (payload, property) {
		delete payload.data[property]	
	}
};

window.HelperPayload = HelperPayload;

module.exports = HelperPayload;