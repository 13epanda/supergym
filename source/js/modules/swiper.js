 const createSwipers = () => {
   let swiperCoaches = new Swiper('.coaches__slider', {
     slidesPerView: 4,
     spaceBetween: 30,
     slidesPerGroup: 4,
     loop: true,
     loopFillGroupWithBlank: true,
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
   });
   return swiperCoaches;
 }

 export {createSwipers};
