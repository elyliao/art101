// index.js - Lab 16: JSON and APIs
// Author: Elizabeth Liao <eyliao@ucsc.edu>
// Date: June 5, 2023

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