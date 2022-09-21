const createSwipers = () => {
  let swiperFeedback = new Swiper('.feedback__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  let swiperCoaches = new Swiper('.coaches__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
      '320': {
        slidesPerView: 1,
        spaceBetween: 0,
      },
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

};

export {createSwipers};
