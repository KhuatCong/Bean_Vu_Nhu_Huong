$('.list-banner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: '.banner-nav'
});
$('.banner-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.list-banner',
  dots: false,
  focusOnSelect: true
});

$('.slide-sale').slick({
  dots: true,
  arrows:false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
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