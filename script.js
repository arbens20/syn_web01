$(document).ready(function() {
    
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');


        $(window).on('load scroll',function(){
            $('.fa-bars').removeClass('fa-times');
            $('.navbar').removeClass('nav-toggle');

            if($(window).scrollTop() > 30){
                $('.header').css({'background':'#6C5CE7','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
            }else{
                $('.header').css({'background':'none','box-shadow':'none'});
            }
        });
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    $('.accordion-header').click(function() {
        $('.accordion .accordion-body').slideUp();
        $(this).next('.accordion-body').slideDown();
        $('.accordion .accordion-header span').text('+');
        $(this).children('span').text('-');
    })
});