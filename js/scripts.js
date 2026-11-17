new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },

  },
});



const deskNav = document.getElementById("desk-nav");

const hamburgerNav = document.getElementById("hamburger-nav");
const menuTitle = document.querySelector(".menu-title");

const sections = document.querySelectorAll("section");

const heroHeight = document.querySelector('#hero').offsetHeight;


const sectionTitles = {
  home: "",
  projects: "PROJECTS",
  techstack: "TECH STACK"
};

window.addEventListener("scroll", () => {
    if (!deskNav || !projects) return;

    if (window.innerWidth > 768) {
        const projectsTop =
            projects.getBoundingClientRect().top;

        deskNav.style.top =
            projectsTop <= 100 ? "0" : "-100px";
    }
});


function toggleMenu() {
    const icon = document.querySelector('.hamburger-icon');
    const menu = document.querySelector('.menu-links');

    icon.classList.toggle('open');  
    menu.classList.toggle('open');
}