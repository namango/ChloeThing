'use strict';

// ------------------- Program Page --------------------

// Arrow Button to scroll to Work Out Programs
const scrollBtn = document.querySelector(".program__scrollContainer");
const programsTitle = document.querySelector(".programs__title");

scrollBtn.addEventListener("click", () => {
  const programTitleTop = programsTitle.getBoundingClientRect().top;

  window.scroll(0, programTitleTop);
  window.scroll({ behavior: "smooth" });
});

// navbar__toggleBtn to active
const toggleBtn = document.querySelector('.navbar__toggleBtn');
const navbarMenu = document.querySelector('.navbar__menu')
toggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle("open");
})
