// index.js - Lab 7: Functions
// Author: Elizabeth Liao <eyliao@ucsc.edu>
// Date: May 4, 2023

// ask for user's name
var userName = window.prompt("What is your name?");

// create function to call
function fixName(userName) {
  var nameArray = userName.split('');
  console.log("Your array name is: " + nameArray);
  // sort letters of the user's name using localeCompare and return those from the function 
  // reference for using localeCompare: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  var nameArraySort = nameArray.sort((a, b) => a.localeCompare(b));
  console.log("Your sorted array name is: " + nameArraySort);
  // join the array
  var nameSorted = nameArraySort.join('');
  console.log("Your sorted name is: ", nameSorted);
  return nameSorted;
};

// call the function and use document.writeln() to output sorted name
document.writeln("Here's your fixed name (you're welcome): ", fixName(userName), "<br>");
