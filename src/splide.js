const splide = new Splide('.splide', {
  type: 'loop',
  drag: false,
  arrows: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  pagination: false,
  focus: 'center',
  perPage: 4,
  autoScroll: {
    speed: 1,
  },
});

splide.mount(window.splide.Extensions);
