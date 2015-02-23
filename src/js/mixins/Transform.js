var _ = require('underscore');
var s = require('underscore.string');

module.exports = {
	initialize : function () {
		this.initializeTransform();
	},

	initializeTransform : function () {
		var transform = _.result(this, 'transform');

		this._generateTransformSymlink(transform);
		this._generateTransformGetters(transform);		
	},

	toJSONTransform : function (data) {
		var transform = _.result(this, 'transform');
		
		_.each(transform, function (propertyProps, proppertyName) {
			var symlinkName  	= '_' + proppertyName,
				symlinkObject 	= this[symlinkName],
				result 			= symlinkObject.toJSON();

			if (!_.isEmpty(result)) {
				data[proppertyName] = result;
			} else {
				delete data[proppertyName];
			}
			
		}, this)	

		return data;
	},

	toJSON : function () {
		return this.toJSONTransform( _.clone(this.attributes) )
	},

	_generateTransformSymlink : function (transform) {
		var symlink = _.map(transform, function (propertyProps, propertyName) {
			var symlinkName  = '_' + propertyName, symlinkObject;
			
			symlinkObject = new propertyProps.model( this.get(propertyName), propertyProps.options );

			this.on('change:' + propertyName, function (model, data, options) {
				if (data) {
					symlinkObject.set(data, options);
				} else {
					symlinkObject.clear();
				}

				this._markAttrsUpdated(data);
				
			});

			return [symlinkName, symlinkObject] 
		}, this);

		_.extend(this, _.object(symlink));
	},

	_markAttrsUpdated : function (data) {
		var now = +Date.now();

		if (_.isArray(data)) {
			data.push(now);
		} else {
			data._time_updated = now;	
		}
	},

	_generateTransformGetters : function (transform) {
		var getters = _.map(transform, function (propertyProps, proppertyName) {
			var capitalizeName  = s.capitalize(proppertyName),
				symlinkName  	= '_' + proppertyName;

			return ['get' + capitalizeName, function (name) {
				return this[name]
			}.bind(this, symlinkName)] 
		}, this);


		_.extend(this, _.object(getters));
	}
}