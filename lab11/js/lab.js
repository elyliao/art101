// index.js - Lab 11: Libraries & jQuery
// Author: Elizabeth Liao <eyliao@ucsc.edu>
// Date: May 18, 2023

// create buttons for challenge, problems, reflection, results, and screenshots sections
// find sections
var challengeEl = $("#challenge");
var problemsEl = $("#problems");
var reflectionEl = $("#reflection");
var resultsEl = $("#results");
var screenshotsEl = $("#screenshots");

// create the buttons
challengeEl.append("<button>Press Me!</button>");
problemsEl.append("<button>Press Me!</button>");
reflectionEl.append("<button>Press Me!</button>");
resultsEl.append("<button>Press Me!</button>");
screenshotsEl.append("<button>Press Me!</button>");

// toggle class special with button click
challengeEl.click(function() {
    challengeEl.toggleClass("special");
});
problemsEl.click(function() {
    problemsEl.toggleClass("special");
});
reflectionEl.click(function() {
    reflectionEl.toggleClass("special");
});
resultsEl.click(function() {
    resultsEl.toggleClass("special");
});
screenshotsEl.click(function() {
    screenshotsEl.toggleClass("special");
});