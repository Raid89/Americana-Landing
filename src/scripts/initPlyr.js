import Plyr from 'plyr';

export function initPlyr() {
  const player = document.querySelector('.js-player');
  if (player) {
    new Plyr(player);
  }
}
