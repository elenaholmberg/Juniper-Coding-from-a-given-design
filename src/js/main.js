console.log("JS loaded");

// ===============================
// swiper import 
// ===============================

import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

// ===============================
// MOBILE MENU
// ===============================

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const backdrop = document.querySelector(".mobile-menu-backdrop");
const closeBtn = document.querySelector(".mobile-menu-close");
const menuLinks = document.querySelectorAll(".mobile-menu-links a");

function openMenu() {
  mobileMenu.classList.add("is-open");
  backdrop.classList.add("is-open");
  hamburger.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  mobileMenu.classList.remove("is-open");
  backdrop.classList.remove("is-open");
  hamburger.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

hamburger.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
backdrop.addEventListener("click", closeMenu); // klick på blur stänger menyn
menuLinks.forEach((link) => link.addEventListener("click", closeMenu));

// ===============================
// SWIPER
// ===============================
new Swiper('.product-swiper', {
  modules: [Pagination],

  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    769: {
      slidesPerView: 3,
    }
  }
});