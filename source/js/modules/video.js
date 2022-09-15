const allVideo = document.querySelectorAll('[data-video]');

const playVideo = () => {
  allVideo.forEach((el) => {
    const buttonPlay = el.querySelector('[data-play]');
    el.classList.remove('is-open');
    el.classList.add('is-close');

    buttonPlay.addEventListener('click', function () {
      el.classList.remove('is-close');
      el.classList.add('is-open');
      el.querySelector('iframe').src = `${el.querySelector('iframe').src}&autoplay=1&mute=0`;
    });
  });
};

export {playVideo};
