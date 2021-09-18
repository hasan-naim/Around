

// code for owl carousel
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
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