import "./style.css";

const navButton = document.querySelector(".nav_button");
const navList = document.querySelector(".nav_list");

navButton.addEventListener("click", () => {
  navButton.firstElementChild.classList.toggle("hidden");
  navButton.lastElementChild.classList.toggle("hidden");
  navList.classList.toggle("hidden");
});
