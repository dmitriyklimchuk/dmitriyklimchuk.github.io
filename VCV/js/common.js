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


    if( $(window).width() <= widthMobile ) {
        $('.slick-slider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            responsive: [
                {
                    breackpoint: 768,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            ]
        });
    }

    $(window).resize(function (){

        if ( $(window).width() <= widthMobile) {
            $('.slick-slider').slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                centerMode: true,
                variableWidth: true,
                responsive: [
                    {
                        breackpoint: 768,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                ]
            });
        }

    });

})();
