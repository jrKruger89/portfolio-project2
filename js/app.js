import "./router.js";
console.log("router is running...");
/**
 * Toggle mewnu for mobile devices
 */
const burger = document.querySelector(".burger");
const navlist = document.querySelector(".nav-list");
const open = document.querySelector(".open");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

let toggleMenu = () => {
  burger.classList.toggle("open");

  if (burger.classList.contains("open")) {
    navlist.style.left = "0px";
    main.classList.add("blur");
    footer.classList.add("blur");
  } else {
    navlist.style.left = "-220px";
    main.classList.remove("blur");
    footer.classList.remove("blur");
  }
};

let menuClose = () => {
  let links = document.querySelectorAll(".nav-item");
  for (const link of links) {
    link.addEventListener("click", () => {});
  }
};

window.menuClose = () => menuClose();
window.toggleMenu = () => toggleMenu();

let displayAge = () => {
  let age_tag = document.querySelector(".age");
  const myBirthDate = new Date(1989, 7, 15);
  let diff = Date.now() - myBirthDate.getTime();
  let age = new Date(diff);
  age_tag.innerHTML = Math.abs(age.getUTCFullYear() - 1970);
};

window.displayAge = () => displayAge();
