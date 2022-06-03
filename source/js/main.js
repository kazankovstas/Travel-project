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

{
  $(function () {
    $(".feedback__list").slick({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      prevArrow: $(".f-prev"),
      nextArrow: $(".f-next"),
    });
  });
}

{
  const openMenu = document.querySelector(".navigation__toggle");
  const menu = document.querySelector(".navigation__wrapper");

  openMenu.addEventListener("click", function () {
    openMenu.classList.toggle("navigation__toggle_active");
    openMenu.classList.contains("navigation__toggle_active")
      ? menu.classList.add("navigation__wrapper_opened")
      : menu.classList.remove("navigation__wrapper_opened");
  });
}
