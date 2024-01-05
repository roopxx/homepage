import "./style.css";

const navButton = document.querySelector(".nav_button");
const navList = document.querySelector(".nav_list");
const navLink = document.querySelectorAll(".nav_link");

navButton.addEventListener("click", () => {
  navButton.firstElementChild.classList.toggle("hidden");
  navButton.lastElementChild.classList.toggle("hidden");
  navList.classList.toggle("hidden");
});

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navList.classList.toggle("hidden");
    navButton.firstElementChild.classList.toggle("hidden");
    navButton.lastElementChild.classList.toggle("hidden");
  })
);
