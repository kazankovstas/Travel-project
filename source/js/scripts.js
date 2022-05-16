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
