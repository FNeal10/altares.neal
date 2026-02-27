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
const heroHeight = document.querySelector('#home').offsetHeight;

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Only move desktop nav on scroll
    if (deskNav && window.innerWidth > 768) {
        if (scrollY > heroHeight) {
            deskNav.style.top = "0";
        } else {
            deskNav.style.top = "-17vh";
        }
    }
});

// Hamburger menu toggle (always works on mobile)
function toggleMenu() {
    const icon = document.querySelector('.hamburger-icon');
    const menu = document.querySelector('.menu-links');

    icon.classList.toggle('open');  // animate hamburger
    menu.classList.toggle('open');  // show/hide links
}