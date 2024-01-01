import "./style.css";

const navButton = document.querySelector(".nav_button");
const navList = document.querySelector(".nav_list");

navButton.addEventListener("click", () => {
  navList.classList.toggle("hidden");
});
