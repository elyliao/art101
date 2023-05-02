// index.js - Lab 6: Arrays and Objects
// Author: Elizabeth Liao <eyliao@ucsc.edu>
// Date: May 2, 2023

// Declare variables
var myTransport = ["car, walking", "bus"];

// Create an object for my main ride
var myMainRide = {
  make: "Lexus",
  model: "RX 400h",
  color: "silver",
  year: 2008,
  ownIt: false,
  age: function() {
    return 2023 - this.year;
  }
};

// outputting myTransport
document.writeln("My main forms of transport are: " + myTransport + "<br>");

// outputting myMainRide
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t', "</pre>"));
