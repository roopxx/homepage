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

const circle = document.querySelector(".circle");

const hovers = document.querySelectorAll(".this");

hovers.forEach((hover) => {
  hover.addEventListener("mouseover", () => {
    circle.classList.add("enlarge");
  });

  hover.addEventListener("mouseout", () => {
    circle.classList.remove("enlarge");
  });
});

window.addEventListener("mousemove", function (e) {
  circle.style.left = e.clientX + "px";
  circle.style.top = e.clientY + "px";
});

const nonHovers = document.querySelectorAll(".tech-stack");

nonHovers.forEach((noHover) => {
  noHover.addEventListener("mouseenter", () => {
    circle.classList.remove("circle");
  });

  noHover.addEventListener("mouseleave", () => {
    circle.classList.add("circle");
  });
});

window.addEventListener("mousemove", function (e) {
  circle.style.left = e.clientX + "px";
  circle.style.top = e.clientY + "px";
});
