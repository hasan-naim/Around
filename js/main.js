

// code for owl carousel
$(document).ready(function() {
    $('.owl-heroCarousel').owlCarousel({
        margin: 40,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 560 up
            560 : {
                items: 2
            },
            // breakpoint from 850 up
            850 : {
                items: 3
            }
        }

    });

    // owl carousel for review section
    $(".owl-review").owlCarousel({
        margin: 20,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 560 up
            520 : {
                items: 2
            },
            // breakpoint from 850 up
            860 : {
                items: 3
            },
            // breakpoint from 1080 up
            1080 : {
                items: 4
            }
        }
    });
});

///

// $(document).ready(function() {
//     $('.owl-carousel').owlCarousel({
//         margin: 40,
//         loop: true,
//         dots: true,
//         autoplay: true,
//         autoplayTimeout: 2000,
//         autoplayHoverPause: true,
//         responsive : {
//             // breakpoint from 0 up
//             0 : {
//                 items: 1
//             },
//             // breakpoint from 560 up
//             560 : {
//                 items: 2
//             },
//             // breakpoint from 850 up
//             850 : {
//                 items: 3
//             }
//         }

//     });
// });