var AS = AS || {};


AS.Modules = (function (){
  return {

    init : function () {
      rating(),
      popUp(),
      AS.Modules.slider();

      $(window).on('onWindowStateChange', function () {
        AS.Modules.slider();
      });

      $(window).resize(function () {
        AS.Modules.slider();
      });
    },

    slider : function () {
      let i,
          slideIndex         = 1,
          windowWidthCurrent = $(window).width(),
          initSliderWidth    = 684,
          sliderList         = $('.grid__slider-list'),
          slides             = document.querySelectorAll('.grid__slider-item'),
          btnNext            = $('.grid_slider-btn-next'),
          btnPrev            = $('.grid_slider-btn-prev');


      showSlides(slideIndex);

      $(sliderList).addClass('grid__slider-container');

      function plusSlides(n) {
        showSlides(slideIndex += n);
      }

      function showSlides(n) {

        n > slides.length ? slideIndex = 1 : false;

        n < 1 ? slideIndex = slides.length : false;


        if (windowWidthCurrent < initSliderWidth){
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

      btnPrev.on('click' , function () {
        plusSlides(-1)
      })

      btnNext.on('click' , function () {
        plusSlides(+1)
      })
    }
  }

  function rating() {
    let item          = $('.product-details__rating-item'),
        icon          = $('.product-details__rating-icon'),
        selectedClass = 'product-details_rating-selected',
        hoverClass    = 'product-details_rating-hover';


    item.on('mouseover', function(){
      let onStar = parseInt($(this).data('value'), 10);

      $(this).parent().children(item).each(function(e){

        (e < onStar) ?
        $(this).children(item).addClass(hoverClass)
        : $(this).children(item).removeClass(hoverClass);

      });

    }).on('mouseout', function(){
      $(this).parent().children(item).each(function(e){
        $(this).children(icon).removeClass(hoverClass);
      });
    });

    $(item).on('click', function(){
      var onStar = parseInt($(this).data('value'), 10);
      var stars = $(this).parent().children(item);

      for (i = 0; i < stars.length; i++) {
        $(stars[i]).children(icon).removeClass(selectedClass);
      }

      for (i = 0; i < onStar; i++) {
        $(stars[i]).children(icon).addClass(selectedClass);
      }
    });
  }

  function popUp () {
    let btnOpen           = $('.product-details__rating-share'),
        socialDesktopView = $('.product-details__social-desktop'),
        btnClose          = $('.product-details__social-desktop-close'),
        classOpen         = 'product-details_social-desktop-open';

    btnOpen.on('click' ,function(){

      socialDesktopView.hasClass(classOpen) ?
      socialDesktopView.removeClass(classOpen)
      : socialDesktopView.addClass(classOpen);

    });

    btnClose.on('click' , function(){
      socialDesktopView.removeClass(classOpen);
    });



    $(document).on('click' ,function (e){
      if (!socialDesktopView.is(e.target) && !socialDesktopView.has(e.target).length && !btnOpen.is(e.target) && !btnOpen.has(e.target).length) {
        socialDesktopView.removeClass(classOpen);
      }
    });
  }
})();

AS.Modules.init();