// index.js - Lab 9: Javascript for the Web
// Author: Elizabeth Liao <eyliao@ucsc.edu>
// Date: May 11, 2023

// assign <div> with id "output" to outputEl
var outputEl = document.getElementById("output");

// create a new element "p" assigned to variable new1El
var new1El = document.createElement("p");

// chage html attribute of new1El to say something new
new1El.innerHTML = "This is new Element 1. You may have noticed that the title of this page has a different font than usual.";

// repeat, but with new2El instead of new1El and make it say something else
var new2El = document.createElement("p");
new2El.innerHTML = "This is new Element 2. You may have also noticed that this text is in a yellow box with a dashed border.";

// append both new1El and new2El to output <div>
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);