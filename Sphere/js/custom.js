$(document).ready(function(){
    $(".header__toggle_menu").click(function() {
        $(".header__sandwich").toggleClass("active");
        $('body').toggleClass("active");
    });

    $(".header__toggle_menu").click(function(){
        if($(".header__nav").is(":visible")) {
            $(".header__nav").fadeOut(600);
            $(".header__nav li a").removeClass("fadeInUp animated");
        }
        else {
            $(".header__nav").fadeIn(600);
            $(".header__nav li a").addClass("fadeInUp animated");

        }
    });

    $('#pop-up-open').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#pop-up')
                    .css('display', 'block')
                    .animate({opacity: 1}, 200);
            });
    });

    $('#pop-up-close, #overlay').click( function(){
        $('#pop-up')
            .animate({opacity: 0}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });



});

$(window).resize(function(){
    if($(window).width() > 992) {
        $(".header__nav").css({
            "display" : "block"
        });
    }
    else {
        $(".header__nav").css({
            "display" : "none"
        });
    }
});