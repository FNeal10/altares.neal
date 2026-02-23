function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

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

// height after which navbar appears (hero section height)
const heroHeight = document.querySelector('#home').offsetHeight;

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (scrollY > heroHeight) {
        // show navbar after scrolling past hero
        if (deskNav) deskNav.style.top = "0";
        if (hamburgerNav) hamburgerNav.style.top = "0";
    } else {
        // hide navbar
        if (deskNav) deskNav.style.top = "-17vh";
        if (hamburgerNav) hamburgerNav.style.top = "-17vh";
    }
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY + window.innerHeight / 3; // adjust as needed

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      history.replaceState(null, null, `#${section.id}`); // update URL without jumping
    }
  });
});