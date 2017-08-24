var request = require('request');

console.log(request);
request('http://www.google.com', function(error, response, body) {
	console.log(response.statusCode);
	if (response.statusCode ===200) {
		console.log(body);
	}
});