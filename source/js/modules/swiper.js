const createCoachesSwiper = () => {
  document.querySelector('.coaches__wrapper').setAttribute('data-is-active', '');
  const swiperCoaches = new Swiper('.coaches__slider', {
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
  return swiperCoaches;
};

const createFeedbackSwiper = () => {
  document.querySelector('.feedback__wrapper').setAttribute('data-is-active', '');
  const swiperFeedback = new Swiper('.feedback__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.feedback__btn-next',
      prevEl: '.feedback__btn-prev',
    },
  });
  return (swiperFeedback);
};

export {createCoachesSwiper, createFeedbackSwiper};
