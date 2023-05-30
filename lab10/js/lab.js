// index.js - Lab 10: JavaScript Events and Forms
// Author: Elizabeth Liao <eyliao@ucsc.edu>
// Date: May 16, 2023

// name sorting function from lab7
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

// attach event listener to button
//get value of input field
var button = document.getElementById("my-button");
button.addEventListener("click", function() {
    var inputValue = document.getElementById("user-name").value;
    var newName = fixName(inputValue);
    var output = document.getElementById("output");
    output.innerHTML = "Here is your new name: " + newName;
});

// Task X: change an aspect of the page with a button click
var click1 = 0
document.getElementById("glitch-1").addEventListener("click", function () {
  document.getElementsByClassName("minor-section")[click1].style.backgroundColor = "red";
  document.getElementsByTagName("h1")[0].style.color="yellow";
  click1 += 1;
})
var click2 = 0
document.getElementById("glitch-2").addEventListener("click", function () {
  document.getElementsByTagName("h2")[click2].style.color = "orange";
  document.getElementById("content").style.backgroundColor = "green";
  click2 += 1;
})