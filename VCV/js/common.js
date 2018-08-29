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


