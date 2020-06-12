const button = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const closeModal = document.getElementsByClassName("close")[0];

button.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

document.addEventListener(
  "DOMContentLoaded",
  () => {
    modal.style.display = "block";
  },
  false
);
