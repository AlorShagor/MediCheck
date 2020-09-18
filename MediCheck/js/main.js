$(document).ready(function(){
    $('.slider-active').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        autoplay:true,
        autoplaySpeed:1500,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })





    // Counter 
    $('.counter-num').counterUp({
        delay: 20,
        time: 2000
    });

    // Team Slider 
    $('.team-slider-active').owlCarousel({
        loop:true,
        margin:20,
        navText:['<i class="fas fa-chevron-right"></i>','<i class="fas fa-chevron-left"></i>'],
        nav:true,
        dots:false,
        autoplay:true,
        autoplaySpeed:1500,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            },
            1000:{
                items:4
            }
        }
    })

    // Bottom Slider 
    $('.bottom-slider-active').owlCarousel({
        loop:true,
        margin:40,
        dots:false,
        navText:false,
        nav:false,
        autoplay:true,
        autoplaySpeed:1500,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

   
})