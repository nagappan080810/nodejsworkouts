var util = require('util');

var EventEmitter = require('events').EventEmitter;

function Resource(value){
	var self = this;
	var count = 0;
	process.nextTick(function() {
		self.emit('start');
		var t = setInterval(function() {
			if (count > value) {
				self.emit('end');
				clearInterval(t);
			} else {
				self.emit('data', count);
				count++;
			}
		},500);
	})
}

util.inherits(Resource, EventEmitter);

module.exports = Resource;
