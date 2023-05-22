// index.js - Lab 12: Conditionals
// Author: Elizabeth Liao <eyliao@ucsc.edu>
// Date: May 23, 2023

// create a sorting function based on text input
function sortingHat(str) {
    let length = str.length;
    console.log("Your name is: " + str + " .The length of your name is: " + length + " characters.");
    var mod = length % 4;
    if (mod == 0) {
        console.log("mod=0");
        return "Gryffindor";
    }
    else if (mod == 1) {
        console.log("mod=1");
        return "Ravenclaw";
    }
    else if (mod == 2) {
        return "Slytherin";
    }
    else if (mod == 3) {
        return "Hufflepuff";
    }
    else {
        // this shouldn't happen, but just in case
        return "... Uh oh, you have no house."
    }
};

// create an event listener to the button
var buttonEl = $("#button");
buttonEl.click(function() {
    $("#output").empty();
    var name = $("#input").val();
    house = sortingHat(name);
    $("#output").append("<p>The Sorting Hat has sorted you into: " + house + "!</p>");
});