// index.js - hello world
// Author: Elizabeth Liao <eyliao@ucsc.edu>
// Date: May 11, 2023

var buttonEl = document.getElementById("my-button");
var headEl = document.getElementsByTagName("h1");
buttonEl.innerHTML = "Press me!";
buttonEl.addEventListener("click", function() {
    var name = prompt("What is your name?");
    headEl[0].innerHTML = "Hello " + name;
});