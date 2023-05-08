// index.js - Lab 8: Anon Functions and Callbacks
// Author: Elizabeth Liao <eyliao@ucsc.edu>
// Date: May 8, 2023

// declaring array of numbers
var nums = [13, 24, 7, 2, 10];
console.log("This is my array of numbers: " + nums);

// make function for squaring
function square(x) {
  var results = x * x;
  return results;
};

// test square function
console.log("2 squared is: " + square(2));
console.log("4 squared is: " + square(4));

// square each number in the array
console.log("My array of numbers squared is: " + nums.map(square));

// anon function for doubling
doubledArray = nums.map(function(x) {
  var doubled = x * 2;
  return doubled;
});

// doubling my array
console.log("Each of the numbers in my array doubled is: " + doubledArray);

var mapResults = "This is my array of numbers: " + nums + "<br>" + "2 squared is: " + square(2) + "<br>" + "4 squared is: " + square(4) + "<br>" + "My array of numbers squared is: " + nums.map(square) + "<br>" + "Each of the numbers in my array doubled is: " + doubledArray; 

var outputEl = document.getElementById("output");
document.getElementById("output").innerHTML = mapResults;

