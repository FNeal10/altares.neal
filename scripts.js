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

const heroHeight = document.querySelector('#home').offsetHeight;


const sectionTitles = {
  home: "",
  about: "ABOUT ME",
  techstack: "TECH STACK",
  projects: "PROJECTS"
};

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // -----------------
    // Desktop nav scroll
    // -----------------
    if (deskNav && window.innerWidth > 768) {
        deskNav.style.top = scrollY > heroHeight ? "0" : "-17vh";
    }

    // -----------------
    // Mobile hamburger title
    // -----------------
    if (hamburgerNav && menuTitle && window.innerWidth <= 768) {
        const scrollPos = scrollY + window.innerHeight / 3;

        sections.forEach(section => {
            if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                menuTitle.textContent = sectionTitles[section.id] || "";
            }
        });
    }
});


function toggleMenu() {
    const icon = document.querySelector('.hamburger-icon');
    const menu = document.querySelector('.menu-links');

    icon.classList.toggle('open');  
    menu.classList.toggle('open');
}