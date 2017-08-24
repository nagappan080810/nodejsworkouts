//eventdoubler - doubles the input if it is even otherwise throws error..
var eventDoubler = function (v, callback) {
	var startTime = new Date().getTime();
	if (v%2) {
		callback(new Error("Input should be even"), null, startTime);
	} else {
		callback(null, v*2, startTime);
	}
}

//handler function to handle the errors.
var errorHandler = function (err, results, time) {
	var endTime = new Date().getTime();
	if (err) {
		console.log(err + "(elapsed time: " + (endTime - time) + ")");
	} else {
		console.log("result :" + results + "(elapsed time: " + (endTime - time) + ")");
	}
}

//calling function with even and odd number but execution will not happen in same order
//even though it looks like sequential call and primitive operations, the time and order is not guarteened.
//check the error and elapsed time...
eventDoubler(2, errorHandler);

eventDoubler(1, errorHandler);