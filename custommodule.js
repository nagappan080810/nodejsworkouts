var count = 2;

//print the result but result null will callback
var doIt = function(result, callback) {
	if (result==null) {
		callback();
	} else {
		console.log("result :"+result);
	}

}

var greet = function(name) {
	return "Hello " + name + "! ";
}

module.exports.doIt = doIt;

module.exports.foo = "bar";

module.exports.greet = greet;