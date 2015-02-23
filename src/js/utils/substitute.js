var substituteRE 	= /\\?\{([^{}]+)\}/g;

module.exports = function (string, object, regexp) {
	return string.replace(regexp || substituteRE, function(match, name){
		return (match[0] == '\\') ? match.slice(1) : (object[name] == null ? '' : object[name]);
	});
};