const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 150,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.feedback-slider-next',
    prevEl: '.feedback-slider-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    dragSize: 45,

  },
});