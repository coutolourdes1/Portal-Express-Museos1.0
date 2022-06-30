/**
 * @file
 */

 (function ($) {
  Drupal.behaviors.paragraph_owl = {
      attach: function (context, settings) {
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

    }
  };
})(jQuery);
