//
//CLICK SOCIAL ICONS ON DESKTOP
//------------------------------
$(document).ready(function(){
    var btnOpen = $('.share'),
        socialDesktopView = $('.social-desktop'),
        btnClose = $('.close');

    btnOpen.on('click' ,function(){
        if(socialDesktopView.hasClass('open')) {
            socialDesktopView.removeClass('open');
        }
        else {
            socialDesktopView.addClass('open');
        }
    });

    btnClose.on('click' , function(){
        socialDesktopView.removeClass('open');
    });



    $(document).on('click' ,function (e){
        if (!socialDesktopView.is(e.target) && !socialDesktopView.has(e.target).length && !btnOpen.is(e.target) && !btnOpen.has(e.target).length) {
            socialDesktopView.removeClass('open');
        }
    });
});


//
//RATING STARS
//--------------------------------------
$(document).ready(function(){

    $('#stars li').on('mouseover', function(){
        var onStar = parseInt($(this).data('value'), 10);

        $(this).parent().children('li.star').each(function(e){
            if (e < onStar) {
                $(this).addClass('hover');
            }
            else {
                $(this).removeClass('hover');
            }
        });

    }).on('mouseout', function(){
        $(this).parent().children('li.star').each(function(e){
            $(this).removeClass('hover');
        });
    });


    $('#stars li').on('click', function(){
        var onStar = parseInt($(this).data('value'), 10);
        var stars = $(this).parent().children('li.star');

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }
    });
});


//
//SLIDER FUNCTION
//---------------------------------

// TODO не работает если завернуть в (function ($, undefined){})(jQuery) или в $(document).ready()
// TODO много кода который,мне кажеться можна сократить

var i,
    slideIndex = 1;
    windowWidthCurrent = $(window).width(),
    windowWidth = 768,
    sliderList = $(".slider-list"),
    slides = document.querySelectorAll(".slider-item");


    showSlides(slideIndex);

    $(sliderList).addClass('slideshow-container');

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        if (windowWidthCurrent < windowWidth){
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
        }

        else {
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "block";
            }
        }

        slides[slideIndex-1].style.display = "block";
    }


$(window).resize(function(){

    var i,
        slideIndex = 1;
        windowWidthCurrent = $(window).width(),
        windowWidth = 768,
        sliderList = $(".slider-list"),
        slides = document.querySelectorAll(".slider-item");

    if (windowWidthCurrent < windowWidth){
        showSlides(slideIndex);

        $(sliderList).addClass('slideshow-container');

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function showSlides(n) {

            if (n > slides.length) {
                slideIndex = 1;
            }

            if (n < 1) {
                slideIndex = slides.length;
            }

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slides[slideIndex-1].style.display = "block";
        }
    }

    else {
        sliderList.removeClass('slideshow-container');

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "block";
        }
    }

});