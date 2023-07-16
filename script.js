const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 80);
});

const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

/*=========================================================*/

const sr = ScrollReveal({
  distance: "85px",
  duration: 2500,
  reset: true,
  delay: 300,
});

sr.reveal(".home-text", { origin: "top" });
sr.reveal(".home-img", { origin: "bottom" });
sr.reveal(".container", { origin: "bottom" });
sr.reveal(".about-text", { origin: "left" });
sr.reveal(".middle-text", { origin: "top" });
sr.reveal(".contact-text", { origin: "bottom" });

var items = document.querySelectorAll(".row");
var current = 0;

function nextItem() {
  if (current >= items.length) {
    current = 0;
  }

  items[current].classList.add("active");
  items[current - 1].classList.remove("active");

  current++;
}

document.querySelector(".next").addEventListener("click", nextItem);

/*===============================================================*/
