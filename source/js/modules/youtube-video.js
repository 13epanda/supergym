const allVideo = document.querySelectorAll('[data-video]');

const playYoutubeVideo = () => {
  allVideo.forEach((el) => {
    const buttonPlay = el.querySelector('[data-play]');
    const urlVideo = el.getAttribute('data-url');

    buttonPlay.addEventListener('click', function (e) {
      e.preventDefault();
      el.classList.remove('is-close');
      el.classList.add('is-open');
      let iframe = document.createElement('iframe');
      let iframeUrl = 'https://www.youtube.com/embed/' + urlVideo + '?autoplay=1&mute=0';
      if (el.getAttribute('data-params')) {
        iframeUrl += '&' + el.getAttribute('data-params');
      }
      iframe.setAttribute('src', iframeUrl);
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'autoplay');
      el.appendChild(iframe);
      el.contentWindow.location.reload(true);
    });
  });
};

export {playYoutubeVideo};
