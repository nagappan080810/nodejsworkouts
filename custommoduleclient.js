var custommodule = require('./custommodule');

//exported string variable is used here..
console.log(custommodule.foo);

//non exported string variable is used here..
console.log(custommodule.count);

//exportedfunction going to be used here..
console.log(custommodule.greet('Rajesh'));

//exportedfunction with callback having proper result..
custommodule.doIt(23, function(){console.log("error")});

//exportedfunction with callback having error
custommodule.doIt(null, function(){console.log("error")});