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

$(function(){
    // var nav    = document.getElementById("nav--container"),
    //     sticky = nav.offsetTop;
    //
    // function addFixedNav() {
    //     if (window.pageYOffset > sticky) {
    //         nav.classList.add("sticky");
    //     } else {
    //         nav.classList.remove("sticky");
    //     }
    // }
    //
    // window.onscroll = function() {
    //     addFixedNav()
    // };

    $(window).scroll(function(){
        var sticky = $('.fixed--container'),
            scroll = $(window).scrollTop();

        if (scroll >= 75) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

        console.log($(window).scrollTop());

});
