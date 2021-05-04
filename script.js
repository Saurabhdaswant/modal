"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

//! function for opening the modal
const openModal = function () {
  console.log("button clicked");
  //* here we have removed the class hidden  which means deactivating the class
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//!openModal function called here
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
}

//! another  best way to close modal by jonas you can use this too
const closeModal = function () {
  //* here we have added the again class  hidden  which means activating the class again as normally
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//!  closeModal function called here
overlay.addEventListener("click", closeModal);
btnCloseModal.addEventListener("click", closeModal);

//* long way to close the modal
// document.querySelector(".close-modal").addEventListener("click", function () {
// document.querySelector(".hidden").style.display = "none";
//   modal.classList.add("hidden");

//   overlay.classList.add("hidden");
// });

//* short way to close the modal
// btnCloseModal.addEventListener("click", function () {
//   modal.classList.add("hidden");

//   overlay.classList.add("hidden");
// });

// overlay.addEventListener("click", function () {
//   modal.classList.add("hidden");

//   overlay.classList.add("hidden");
// });

//! best way to close by me

//? IN THIS I HAVE CREATED A FUNCTION  IN WHICH BY GIVING ANY ARUGEMENT EX.("closeModal(overlay);") THE MODAL WIIL CLOSE

// const closeModal = function (close) {
//   close.addEventListener("click", function () {
//     modal.classList.add("hidden");

//     overlay.classList.add("hidden");
//   });
// };

// closeModal(overlay);
// closeModal(btnCloseModal);
