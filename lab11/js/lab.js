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
challengeEl.append("<button>Press Me to change problems' button color!</button>");
problemsEl.append("<button>Press Me to change challenge's button color!</button>");
reflectionEl.append("<button>Press Me!</button>");
resultsEl.append("<button>Press Me!</button>");
screenshotsEl.append("<button>Press Me!</button>");

// assign buttons to variables
var challengeButton = $("#challenge button");
var problemsButton = $("#problems button");
var reflectionButton = $("#reflection button");
var resultsButton = $("#results button");
var screenshotsButton = $("#screenshots button");

// toggle class special with button click
challengeButton.click(function() {
    challengeEl.toggleClass("special");
});
problemsButton.click(function() {
    problemsEl.toggleClass("special");
});
reflectionButton.click(function() {
    reflectionEl.toggleClass("special");
});
resultsButton.click(function() {
    resultsEl.toggleClass("special");
});
screenshotsButton.click(function() {
    screenshotsEl.toggleClass("special");
});

// make buttons change button color
challengeButton.click(function() {
    problemsButton.toggleClass("color-change");
});
problemsButton.click(function() {
    challengeButton.toggleClass("color-change");
});