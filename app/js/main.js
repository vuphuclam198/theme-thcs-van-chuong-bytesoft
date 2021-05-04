$(document).ready(function () {
    AOS.init({
        once: true,
        offset: 0,
        easing: 'ease-in-out-cubic',
        duration: "300",
    });

    if ($(this).scrollTop() >= 42) {
        $(".header-nav").addClass("scrolled");
    } else {
        $(".header-nav").removeClass("scrolled");
    }
    $(window).on("load", function () {
        if ($(this).scrollTop() >= 42) {
            $(".header-nav").addClass("scrolled");


        } else {
            $(".header-nav").removeClass("scrolled");

        }
    });
    $(document).scroll(function () {
        if ($(this).scrollTop() >= $("#main").offset().top) {
            $(".back-top").addClass("active");

        } else {
            $(".back-top").removeClass("active");

        }
        if ($(this).scrollTop() >= 42) {
            $("#header").addClass("scrolled");


        } else {
            $("#header").removeClass("scrolled");

        }
    });
    $(".back-top").on("click", function () {
        $(".back-top").removeClass("active");
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });


    /* phần slider */
    $(".bs-slide").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        centerMode: false,
        centerPadding: '0',
        dots: false,
        fade: false,
        autoplay: false,
        infinite: true,
        draggable: true,
        swipeToSlide: false,
        touchMove: false,
        swipe: false,
        // nextArrow: '.next_caro', 
        // prevArrow: '.prev_caro',

        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },{

            breakpoint: 767,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },

        {
            breakpoint: 550,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },

        {
            breakpoint: 479,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ]

    });

});
