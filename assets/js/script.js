$(document).ready(function () {
    $(".iconos article").click(function () {
        $(this).animate({ top: "-=50px"}, 200).animate({ top: "+=50px"}, 200)
    });

    $(".parrafo").fadeIn(4000);
});

$(document).ready(function(){
    $(".nav-link").on('click', function(){
        $(this).css({
            "font-weight": "bold",
            "color": "#ffffff"
        });
    });
});