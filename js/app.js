import "./router.js";
console.log("Router is running...");
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

window.toggleMenu = () => toggleMenu();

let displayAge = () => {
  const myBirthDate = new Date(1989, 7, 15);
  let diff = Date.now() - myBirthDate.getTime();
  let age = new Date(diff);
  return Math.abs(age.getUTCFullYear() - 1970);
};

let display_about_text =
  /*html*/
  `Mit navn er <b>Jesper Ring Krüger</b>,
    jeg er ${displayAge()} år.
    Til daglig er jeg multimediedesign
    studerende og er i gang med mit 3. semester
    på Erhvervsakademi Århus.<br/><br/>
    Når jeg ikke sidder ved computeren
    bruger jeg en stor portion af min
    tid på sport. Jeg er en del af det danske
    landshold i kørestolsrugby og deltog,
    i sommers, i de Paralympiske Lege i Tokyo.<br/><br/>
    Jeg har en humoristisk tilgang til livet.
    Dette betyder bestemt ikke at jeg ikke er seriøs
    omkring mit arbejde, studieliv såvel som sportsliv.
    Jeg er dedikeret til den opgave som er stillet foran mig.`;

let age_tag = document.querySelector(".about-text");
age_tag.innerHTML = display_about_text;

window.displayAge = () => displayAge();
