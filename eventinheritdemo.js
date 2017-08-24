var Resource = require('./resourcemodule');

var resourceObj = new Resource(6);

resourceObj.on('start', function() {
	console.log("events started");
});

resourceObj.on('data', function(data) {
	console.log("data received -"+data);
});

resourceObj.on('end', function() {
	console.log("events ended");
});