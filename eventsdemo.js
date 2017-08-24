var EventEmitter = require('events').EventEmitter;

var getResource = function(c) {
	var e = new EventEmitter();
	process.nextTick(function() {
		e.emit('start');
		var count = 1;
		var t = setInterval(function() {
			if (count > c) {
				e.emit('end');
				clearInterval(t);
			} else {
				e.emit('data',count);
				count++;
			}
		});
	});
	return e;
};

var r = getResource(5);

r.on('start', function(){
	console.log("data event started");
});

r.on('data', function(c) {
	console.log('data received as :'+c);
});

r.on('end', function(){
	console.log('date completed received');
});

