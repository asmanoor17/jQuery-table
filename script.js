$(document).ready(function(){
    $("th").css({"font-size": "20px","font-style": "italic"
    });
    $('tbody tr td:nth-child(odd)').css({
        "background-color":"lightblue"
    })
    $('tbody tr td:nth-child(even)').css({
        "background-color": "tomato"
    })
});
