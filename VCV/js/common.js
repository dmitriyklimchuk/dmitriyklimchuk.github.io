$(function() {

    var nav     = $('.jsNav'),
        header  = $('header'),
        menuBtn = $('.jsMenuBtn');
    menuBtn.on('click', function(){
        nav.toggleClass('active');
        menuBtn.toggleClass("active");
        header.toggleClass('fixed-header');
    });

});


$(function (){
    var widthMobile = 768;
    var params = {
        slidesToShow: 1,
        autoplay: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint:769,
                settings: "unslick",
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    };


    if( $(window).width() <= widthMobile ) {
        $('.jsSlider').addClass('slick-slider');
        $('.slick-slider').slick(params);
    }

    $(window).resize(function (){


        if ( $(window).width() <= widthMobile) {
            $('.jsSlider').addClass('slick-slider');
            $('.slick-slider').slick(params);
        }
        else {
            $('.jsSlider').removeClass('slick-slider');
        }

    });

});

$(function(){
    $("body").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href');
        var top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 25}, 1500);
    });
});

$(function(){
    $("#phone").inputmask("+7(999)9999999");
});
