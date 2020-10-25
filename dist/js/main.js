$(document).ready(function () {
  /**Function open/close mobile menu */
  function togleMobileMenu() {
    $(".burger").click(function (event) {
      $(".header-menu").slideToggle(400);
      event.preventDefault();
    });
  }

  function changeNumberOfDots() {
    const dots = $(".slick-dots").children();
    dots.each((index) => {
      index % 2 == 0 ? (dots[index].style.display = "none") : null;
    });
  }
  /**Hero slider */
  $(".slider").slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    draggable: true,
    prevArrow: ".slider-btn__prev",
    nextArrow: ".slider-btn__next",
  });

  $(".play-video").magnificPopup({
    type: "iframe",
    autoplay: true,
  });

  $(".clients-slider").slick({
    speed: 500,
    slidesToShow: $(window).width() > 768 ? 2 : 1,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    mobileFirst: true,
    initialSlide: 1,
  });

  // (function ($) {
  // Call all functions
  togleMobileMenu();
  changeNumberOfDots();
  // })(jQuery);
});
