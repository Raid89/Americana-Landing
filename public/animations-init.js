import { animateOnView } from '/src/utils/intersectionObserver.js';

window.addEventListener('DOMContentLoaded', () => {
  animateOnView('[data-animate]');
});
