$(function() {
  "use strict";

  // ------- Video Popup ------- //
  $(".play-btn").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  // ------- Gallery Lightbox ------- //  
  $('.img-gal').magnificPopup({
    type: 'image',
    gallery: { enabled: true }
  });

  // ------- Testimonial Carousel ------- //  
  if ($('.testi-carousel').length > 0) {
    $('.testi-carousel').owlCarousel({
      loop: true,
      autoplay: true,
      margin: 30,
      smartSpeed: 600,
      nav: false,
      dots: true,
      responsive: {
        0: { items: 1 },
        800: { items: 2 },
        1000: { items: 3 }
      }
    });
  }

  // ------- Fixed Navbar ------- //
  var nav_offset_top = $('header').height() + 50;
  function navbarFixed() {
    if ($('.header_area').length) {
      $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $('.header_area').addClass('navbar_fixed');
        } else {
          $('.header_area').removeClass('navbar_fixed');
        }
      });
    }
  }
  navbarFixed();

  // ------- Smooth Scroll for In-page Navigation ------- //
  $('a[href*="#"]').on('click', function(e) {
    var target = $(this.hash);
    if (target.length) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - 70
      }, 600);
    }
  });

  // ------- Activate Nice Select ------- //
  if ($('select').length) {
    $('select').niceSelect();
  }

  // ------- Mailchimp Integration ------- //  
  function mailChimp(selector) {
    if ($(selector).length) {
      $(selector).find('form').ajaxChimp();
    }
  }
  mailChimp('#mc_embed_signup');
  mailChimp('#mc_embed_signup2');

  // ------- Scroll Fade-in Animations ------- //
  $(window).on('scroll', function() {
    $('.fade-in').each(function() {
      var elementTop = $(this).offset().top;
      var windowBottom = $(window).scrollTop() + $(window).height();
      if (elementTop < windowBottom - 50) {
        $(this).addClass('visible');
      }
    });
  });
});
