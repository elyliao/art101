// index.js - Lab 13: Loops
// Author: Elizabeth Liao <eyliao@ucsc.edu>
// Date: May 25, 2023

function fizzBuzzBoom() {
    $("#output").empty();
    // assign input values to variables
    var max = $("#max").val();
    var n1 = $("#n1").val();
    var o1 = $("#o1").val();
    var n2 = $("#n2").val();
    var o2 = $("#o2").val();
    var n3 = $("#n3").val();
    var o3 = $("#o3").val();
    var n4 = $("#n4").val();
    var o4 = $("#o4").val();
    for (var i=1; i<=max; i++) {
        var print = "";
        // if number is a factor, add output value to string
        if (i%n1 == 0) {
            print += o1;
        }
        if (i%n2 == 0) {
            print += o2;
        }
        if (i%n3 == 0) {
            print += o3;
        }
        if (i%n4 == 0) {
            print += o4;
        }
        // if number was not a factor of any of the given values, add number value to string
        if (print == "") {
            print += i;
        }
        // append each number/result to the div
        $("#output").append("<p>" + print + "</p>");
    };
    // for original fizzbuzzboom function from 1-200
    /* for (var i=1; i<=200; i++) {
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
    } */
};

// button to call the function
$("#fizz-buzz-boom").click(function () {
    $("#fizz-buzz-boom").html("start again");
    fizzBuzzBoom();
});