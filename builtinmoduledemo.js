const util = require('util');

const debuglog = util.debuglog('builtinmoduledemo');

debuglog('testing the debuglog: [%s]', 'Krithik');

var os = require('os');

var toMb = function(f) {
	return Math.round(((f/1024)/1024)/1024);
}

console.log(os.hostname());

console.log(os.loadavg());

console.log("os free mem -"+ toMb(os.freemem()) + " out of " + toMb(os.totalmem()));
