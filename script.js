"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
const fuckBody = document.querySelector("body");
console.log(btnOpenModal);

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", function () {
    console.log("do epic shits");

    // document.querySelector(".hidden").style.display = "block";

    modal.classList.remove("hidden");

    overlay.classList.remove("hidden");
  });
}

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

//! best way to close

//? IN THIS I HAVE CREATED A FUNCTION  IN WHICH BY GIVING ANY ARUGEMENT EX.("closeModal(overlay);") THE MODAL WIIL CLOSE

const closeModal = function (close) {
  close.addEventListener("click", function () {
    modal.classList.add("hidden");

    overlay.classList.add("hidden");
  });
};

closeModal(overlay);
closeModal(btnCloseModal);
