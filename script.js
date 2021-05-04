"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
console.log(btnOpenModal);

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", function () {
    console.log("do epic shits");

    // document.querySelector(".hidden").style.display = "block";

    modal.classList.remove("hidden");

    overlay.classList.remove("hidden");
  });
}

document.querySelector(".close-modal").addEventListener("click", function () {
  // document.querySelector(".hidden").style.display = "none";
  modal.classList.add("hidden");

  overlay.classList.add("hidden");
});
