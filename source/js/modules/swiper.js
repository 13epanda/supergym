const createSwipers = () => {
  let swiperFeedback = new Swiper('.feedback__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.feedback__btn-next',
      prevEl: '.feedback__btn-prev',
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
      nextEl: '.coaches__btn-next',
      prevEl: '.coaches__btn-prev',
    },
  });

};

export {createSwipers};
