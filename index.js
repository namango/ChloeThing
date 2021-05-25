"use stric";

// -------------------------main ------------------------

// When HomePage is poped up, Animate title
const title = document.querySelector(".title");
const titleBts = document.querySelector(".title__btns");

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        title.classList.add("active");
        setTimeout(()=> {
            titleBts.classList.add("active");
        }, 200);
    }, 500);
    
})