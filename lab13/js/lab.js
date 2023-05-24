// index.js - Lab 13: Loops
// Author: Elizabeth Liao <eyliao@ucsc.edu>
// Date: May 25, 2023

// create a function that loops through 1-200 and prints out either the number, fizz, buzz, boom, or fizzbuzz/fizzboom/buzzboom/fizzbuzzboom
function fizzBuzzBoom() {
    for (var i=1; i<=200; i++) {
        // multiple of 3 and 5 and 7
        if (i%105 == 0) {
            var print = "FizzBuzzBoom!";
        }
        // multiple of 3 and 5
        else if (i%15 == 0) {
            var print = "FizzBuzz!";
        }
        // multiple of 3 and 7
        else if (i%21 == 0) {
            var print = "FizzBoom!";
        }
        // multiple of 5 and 7
        else if (i%35 == 0) {
            var print = "BuzzBoom!";
        }
        // multiple of 3
        else if (i%3 == 0) {
            var print = "Fizz!";
        }
        // multiple of 5
        else if (i%5 == 0) {
            var print = "Buzz!";
        }
        // multiple of 7
        else if (i%7 == 0) {
            var print = "Boom!";
        }
        else {
            var print = i
        }
        // append each number/result to the div
        $("#output").append("<p>" + print + "</p>");
    }};

// button to call the function
$("#fizz-buzz-boom").click(function () {
    $("#fizz-buzz-boom").remove();
    fizzBuzzBoom();
});