{
  $(function () {
    $(".popular__list").slick({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      prevArrow: $(".prev"),
      nextArrow: $(".next"),
    });
  });
}
