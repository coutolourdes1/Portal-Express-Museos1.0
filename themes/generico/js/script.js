// Libreria de Terceros 
import "./vendor/owl.carousel.min.js";

(function ($, Drupal) {
  'use strict';
  Drupal.behaviors.generico = {
    attach: function (context, settings) {
    }
  };
})(jQuery, Drupal);

 
// Add color to menu on scroll
$(function () {
  $(document).scroll(function () {
    var $nav = $(".menu-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(window).on('load', function() {
  
  // Generic Hero
  $('.owl-carousel-generic').owlCarousel({
    stagePadding:0,
    loop:true,
    margin:0,
    singleItem:true,
    items: 1, 
    dots:true,
    animateOut: "fadeOut",
    lazyLoad:true,
    autoplay:true,
    autoplayTimeout:10000,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        991:{
            items:1,
            nav:false
        },
        1580:{
          items:1,
          nav:true
      }
    }
  })

  // Hero AGEBDA
  $('.owl-carousel-agenda').owlCarousel({
    loop:false,
    margin:20,
    nav:false,
    singleItem:true,
    dots:false,
    animateOut: "fadeOut",
    lazyLoad:false,
    autoplay:false,
    autoplayTimeout:10000,
    responsive:{
        0:{
            items: 1,            
            stagePadding:40
        },
        991:{
            items: 2,
            stagePadding:40
        },
        1280:{
            items: 4,
            stagePadding:1
        }
    }
  })

  // Hero NOVEDADES
  $('.owl-carousel-novedades').owlCarousel({
    loop:false,
    margin:20,
    nav:false,
    singleItem:true,
    dots:false,
    animateOut: "fadeOut",
    lazyLoad:false,
    autoplay:false,
    autoplayTimeout:10000,
    responsive:{
        0:{
            items: 1,            
            stagePadding:40,
        },
        991:{
            items: 2,
            stagePadding:40,
        },
        1280:{
            items: 4,
            stagePadding:1
        }
    }
  })

  // Galeria de imagenes 
  // if (jQuery().owlCarousel) {
    $('.owl-carousel-galeria').owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      lazyload: false,
      video: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: true,
      navText: ['<span class="material-icons-outlined"> arrow_back </span>', '<span class="material-icons-outlined"> arrow_forward </span>'], 

      onTranslate: function(event) {
        var currentSlide, player, command;
        currentSlide = $('.owl-item.active');
        player = currentSlide.find(".item-video iframe").get(0);
        command = {
          "event": "command",
          "func": "pauseVideo"
        };
        if (player != undefined) {
          player.contentWindow.postMessage(JSON.stringify(command), "*");
        }
      }

    });
  // }

  // Carousel-cards
  $('.owl-carousel-cards').owlCarousel({
    loop:false,
    margin:20,
    singleItem:true,
    dots:false,
    animateOut: "fadeOut",
    lazyLoad:false,
    autoplay:false,
    autoplayTimeout:10000,
    navText: ['<span class="material-icons-outlined"> arrow_back </span>', '<span class="material-icons-outlined"> arrow_forward </span>'], 
    responsive:{
      0:{
          items: 1,            
          stagePadding:40,
          nav:false
      },
      991:{
          items: 2,
          stagePadding:40,
          nav:false
      },
      1366:{
          items: 4,
          stagePadding:1,
          nav:true
      }
    }
  });


    // Función para hacer colapsable los enlaces del footer en mobile. 
    var coll =  document.getElementsByClassName("nav-title");
    console.log(coll); 
    var i;
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
      });
    }

    // Duplica el componente de las redes sociales luego de los enlaces del footer en mobile.
    if ($(window).width() < 991) {
      $(".footer-header__content > .component-social-media__horizontal").clone().insertAfter(".footer-body__content");
    } else {
      return null; 
    }

});