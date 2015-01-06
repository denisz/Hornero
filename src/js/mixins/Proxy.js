module.exports = {
	proxy : function (target, eventTarget, source, eventSource) {
		target.on(eventTarget, function (model, data, options) { 
			source.trigger(eventSource, source, data, options);
		})
	}
}