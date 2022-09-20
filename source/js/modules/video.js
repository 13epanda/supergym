const allVideo = document.querySelectorAll('[data-video]');

const playVideo = () => {
  allVideo.forEach((el) => {
    const buttonPlay = el.querySelector('[data-play]');
    const urlVideo = el.getAttribute('data-url');
    el.classList.remove('is-open');
    el.classList.add('is-close');

    buttonPlay.addEventListener('click', function () {
      el.classList.remove('is-close');
      el.classList.add('is-open');
      let iframe = document.createElement('iframe');
      let iframe_url = 'https://www.youtube.com/embed/'+urlVideo+'?autoplay=1&mute=0';
      if(el.getAttribute('data-params'))iframe_url+='&'+el.getAttribute('data-params');
      iframe.setAttribute('src',iframe_url);
      iframe.setAttribute('frameborder','0');
      el.appendChild(iframe);
    });
  });
};

export {playVideo};
