var events = require('events'); // Import events module
var eventEmitter = new events.EventEmitter(); // Create an eventEmitter object

var firstFunction = function letstestFirst(){ // firstFunction created -- tied to : letstest
	console.log("This is first function");
	eventEmitter.emit("FireSecond"); // starts FireSecond : But this useless since firstFunction is not binded and emitted
}
var secondFunction = function letstestSecond(){
	console.log("This is second function");
	//eventEmitter.emit("FireFirst");
}

eventEmitter.on("FireFirst",firstFunction);
eventEmitter.on("FireSecond",secondFunction);

eventEmitter.emit("FireFirst");