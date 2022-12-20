$(document).ready(function(){

    // owl carousel

    $('.header .owl-carousel').owlCarousel({
        loop:true,
        items:1,
        autoplay:true,
        animateOut: 'fadeOut',
        smartSpeed: 450,
    })

    // owl carousel

    $('.brands .owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        responsive:{0: {items:2}, 768: {items:4}, 992: {items:6}}
    })

    // side menu

    $('.menu').on('click', function(){

        $('.side-menu').toggleClass('open');

    })

    $('.fa-times').on('click', function(){

        $('.side-menu').removeClass('open');

    })

    // search menu

    $('.fa-search').on('click', function(){

        $('.search').toggleClass('open');

    })

    $('.fa-times').on('click', function(){

        $('.search').removeClass('open');

    })

    // toggle navs

    $(window).scroll(function(){

        if($(this).scrollTop() >= 30){

            $('.nav-left').fadeOut(500);
            $('.nav-top').fadeIn(500);

        }else{

            $('.nav-top').fadeOut(500);
            $('.nav-left').fadeIn(500);

        }

    })

    if($(this).scrollTop() >= 30){

        $('.nav-left').fadeOut(500);
        $('.nav-top').fadeIn(500);

    }else{

        $('.nav-top').fadeOut(500);
        $('.nav-left').fadeIn(500);
        
    }

    //counterup

    var counters = document.querySelectorAll('.about .num');
    var delay = 200;

    counters.forEach(counter => {

        var updateCount = () =>{

            var target = counter.getAttribute('data-target');
            var count = +counter.innerText;
            var speed = target /delay;

            if(count < target){

                counter.innerText = Math.floor(count + speed);
                setTimeout(updateCount,1);

            }else{
                counter.innerText = target;
            }

        }

        updateCount();

    })

    // count down

    var content = $('.countdown').html();
    
    $('.countdown').countdown('2021/01/01', function(event) {
        
        $(this).html(event.strftime(content));
    });

    // smooth scroll

    $('.side-menu li a').on('click', function(){

        $('html, body').animate({

            scrollTop : $( '#' + $(this).data('scroll')).offset().top - 170

        }, 1000)

        $('.side-menu').removeClass('open');
    });

    // show button up

    $(window).scroll(function(){

        if($(window).scrollTop() >= 500){

            $('.up').fadeIn(500);

        }else{

            $('.up').fadeOut(500);

        }

    });

    if($(window).scrollTop() >= 500){

        $('.up').fadeIn(500);

    }else{

        $('.up').fadeOut(500);

    }

    // click on button up

    $('.up').on('click', function(){

        $('body, html').animate({

            scrollTop : 0 

        }, 1000)

    })

    // dark mode

    var link = $('link[data-color="switch"]'),
        logo = $('.logo img')

    $('.fa-moon').on('click', function(){

        if(link.attr('href') == 'css/style-dark.css'){

            link.attr('href', 'css/style-light.css')
            
            logo.attr('src', 'images/logo-dark.png')

        }else{

            link.attr('href', 'css/style-dark.css')

            logo.attr('src', 'images/logo.png')

        }
    })

})