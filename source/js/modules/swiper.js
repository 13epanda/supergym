const createSwipers = () => {
  let swiperCoaches = new Swiper('.coaches__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
      '768': {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      '1200': {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  return swiperCoaches;
};

export {createSwipers};
