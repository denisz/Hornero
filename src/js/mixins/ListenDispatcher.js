var appDispatcher = require('../services/appDispatcher'),
	_ = require('underscore');

module.exports = {
	/*
	 [
	 	[ Actions.EventsName, 'handle'],
	 	[ Actions.EventsName, 'handle2'],
	 	[ Actions.EventsName2, 'handle3'],
	 ]
	 */
	actionsDispatcher : null,

	listenDispatcher : function () {
		if (this._handleAction) {
			this.stopListeningDispatcher();
		}

		var actions, dispatchToken;

		actions = _.result(this, 'actionsDispatcher');

		this._handleAction = _.bind(this.handleAction, this, _.object(actions));
		dispatchToken = appDispatcher.register(this._handleAction);

		if ( typeof this.set === 'function') {
			this.set('dispatchToken', dispatchToken);
		} else if (typeof this.handleDispatchToken === 'function') {
			this.handleDispatchToken()
		}
		
	},

	stopListeningDispatcher : function () {
		appDispatcher.unregister(this._handleAction);
	},

	_checkPayload : function (payload) {
		if (!payload || !payload.action) {
			throw new Error("Payload должен содержать в себе свойство 'action'");
		}

		return payload.action;
	},

	handleAction : function (actions, payload) {
		var actionName = this._checkPayload(payload);

		if (actions) {
			var handleName 	= actions[actionName],
				handle 		= this[handleName];

			if (typeof handle === 'function') {
				console.log("Processing action " + actionName);

				try {
					handle.apply(this, [payload]);	
				} catch(e) {
					console.error(e, 'Error in ' + handleName + " action " + actionName)
				}	
			}
		}
		
		if (typeof this.handleActionSelf === 'function') {
			this.handleActionSelf(payload);
		}
	}
}