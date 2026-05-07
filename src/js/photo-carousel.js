// ===============================
// swiper import 
// ===============================

import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

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