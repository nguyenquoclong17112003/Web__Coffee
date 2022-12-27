const createAccount = document.querySelector(".js-account");
const modal = document.querySelector(".js-modal");
const closeModal = document.querySelector(".js-close");
createAccount.addEventListener("click", function () {
  modal.classList.add("open");
});

closeModal.addEventListener("click", function () {
  modal.classList.remove("open");
});
