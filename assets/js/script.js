/*Single Item Slider*/
$('.slick-c-slider').slick({
  infinite: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  arrows: true,
   autoplaySpeed: 2000,
   cssEase: "ease",
  //  nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
  // prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    // nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
    // prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

 $('.nav-toggle').click(function () {
    var collapse_content_selector = $(this).attr('href');
    var toggle_switch = $(this);
    $(collapse_content_selector).toggle(function () {
        if ($(this).css('display') == 'none') {
            toggle_switch.html('Read More');
        } else {
            toggle_switch.html('Read Less');
        }
    });
});

$('#enquireModal').on('show.bs.modal', function (e) {
    $('body').addClass("example-open");
}).on('hide.bs.modal', function (e) {
    $('body').removeClass("example-open");
})