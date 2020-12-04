$(document).ready(function() {
 
    const slider = $("#slider");
    const news = $("#news");
   
    slider.owlCarousel({
    
        loop:true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        items:1,
        dots: true,
     
    });

    news.owlCarousel({
    
        loop:true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        items:1,
        responsiveClass:true,
        navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        nav:true,
        dots: false,
        margin: 40,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,           
            },
        }
     
    });
   

// Handler label form

$('#form input, #form textarea').each(function() {   
            
    $(this).focus(function() {
        $(this).prev('label').fadeOut();
     });

     $(this).focusout(function() {
        if(!$(this).val()){
            $(this).prev('label').fadeIn();
        }
     });


  })

  // LINK-ARROW

  $("a.scrollLink").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
  });
  

});