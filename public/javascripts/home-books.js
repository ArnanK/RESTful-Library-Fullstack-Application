let swiperHome = new Swiper(".home__swiper", {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: "auto",
    centeredSlides: "auto",
  
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  
    breakpoints: {
      1220: {
        spaceBetween: -32,
      },
    },
  });

  /*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper(".new__swiper", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: "auto",

  breakpoints: {
    1150: {
      slidesPerView: 3,
    },
  },
});



