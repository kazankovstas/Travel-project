{
  const filterHide = document.querySelector(".form-group__toggle");
  const fieldset = document.querySelector(".form-group__fieldset");

  filterHide.addEventListener("click", function () {
    filterHide.classList.toggle("form-group__toggle_hide");
    filterHide.classList.contains("form-group__toggle_hide")
      ? fieldset.classList.add("visually-hidden")
      : fieldset.classList.remove("visually-hidden");
  });
}

{
  const btnLike = document.querySelector(".card__button-like");
  const btnLikeIcon = document.querySelector(".card__button_icon");

  btnLike.addEventListener("click", function () {
    btnLikeIcon.classList.contains("card__button_icon_active")
      ? btnLikeIcon.classList.remove("card__button_icon_active")
      : btnLikeIcon.classList.add("card__button_icon_active");
  });
}

{
  const openMenu = document.querySelector(".main-nav__toggle");
  const menu = document.querySelector(".main-nav__wrapper");

  openMenu.addEventListener("click", function () {
    openMenu.classList.toggle("main-nav__toggle_active");
    openMenu.classList.contains("main-nav__toggle_active")
      ? menu.classList.add("main-nav__wrapper_opened")
      : menu.classList.remove("main-nav__wrapper_opened");
  });
}
