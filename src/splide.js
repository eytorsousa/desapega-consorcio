const splide = new Splide('.splide', {
  type: 'loop',
  drag: false,
  arrows: false,
  focus: 'center',
  perPage: 3,
  autoScroll: {
    speed: 1,
  },
});

splide.mount(window.splide.Extensions);
