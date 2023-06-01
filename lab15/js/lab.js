// index.js - Lab 15: AJAX
// Author: Elizabeth Liao <eyliao@ucsc.edu>
// Date: May 31, 2023

$("#activate").click(function() {
    $.ajax({
        url: "https://yesno.wtf/api",
        data: {},
        type: "GET",
        dataType: "json",
        success: function(data) {
            console.log(data);
            $("#output").empty();
            $("#output").append(data.answer + "<br>");
            $("#output").append("<img src=" + data.image + ">");
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error: ", textStatus, errorThrown);
        }
    })
});