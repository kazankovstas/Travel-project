const filterHide = document.querySelector(".form-group__toggle");
const fieldset = document.querySelector(".form-group__fieldset");

filterHide.addEventListener("click", function () {
  filterHide.classList.toggle("form-group__toggle_hide");
  filterHide.classList.contains("form-group__toggle_hide")
    ? fieldset.classList.add("visually-hidden")
    : fieldset.classList.remove("visually-hidden");
});

// const filterHide = document.querySelectorAll(".form-group__toggle");
// const fieldset = document.querySelector(".form-group__fieldset");
// const fieldsetPeople = document.querySelector(".form-group__fieldset_people");

// filterHide.forEach(function (filterHide) {
//   filterHide.addEventListener("click", function () {
//     filterHide.classList.toggle("form-group__toggle_hide");
//     filterHide.classList.contains("form-group__toggle_hide")
//       ? fieldset.classList.add("visually-hidden")
//       : fieldset.classList.remove("visually-hidden");
//     filterHide.classList.contains("form-group__toggle_hide")
//       ? fieldsetPeople.classList.add("visually-hidden")
//       : fieldsetPeople.classList.remove("visually-hidden");
//   });
// });
