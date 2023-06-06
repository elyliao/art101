// index.js - Lab 16: JSON and APIs
// Author: Elizabeth Liao <eyliao@ucsc.edu>
// Date: June 5, 2023

// initial comic 
function getComic() {
    $.ajax({
        url: "https://xkcd.com/info.0.json",
        data: {},
        type: "GET",
        dataType: "json",
        success: function(data) {
            comicObj = data
            $("#output").empty();
            $("#output").append('<h1>' + comicObj.title + '</h1>');
            $("#output").append('<img alt="' + comicObj.alt + '" alt ="' + comicObj.alt + '" src ="' + comicObj.img + '">');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error: ", textStatus, errorThrown);
        }
    })
};

getComic();

// function for next page
$("#next").click(function getComic() {
    var number = comicObj.num + 1;
    $.ajax({
        url: "https://xkcd.com/" + number + "/info.0.json",
        data: {},
        type: "GET",
        dataType: "json",
        success: function(data) {
            comicObj = data
            $("#output").empty();
            $("#output").append('<h1>' + comicObj.title + '</h1>');
            $("#output").append('<img alt="' + comicObj.alt + '" alt ="' + comicObj.alt + '" src ="' + comicObj.img + '">');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error: ", textStatus, errorThrown);
            $("#output").append("there are no more comics.")
        }
    })
});

// function for previous page
$("#prev").click(function getComic() {
    var number = comicObj.num - 1;
    $.ajax({
        url: "https://xkcd.com/" + number + "/info.0.json",
        data: {},
        type: "GET",
        dataType: "json",
        success: function(data) {
            comicObj = data
            $("#output").empty();
            $("#output").append('<h1>' + comicObj.title + '</h1>');
            $("#output").append('<img alt="' + comicObj.alt + '" alt ="' + comicObj.alt + '" src ="' + comicObj.img + '">');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error: ", textStatus, errorThrown);
            $("#output").append("there are no more comics.")
        }
    })
});