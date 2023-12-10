const { remote } = require('electron');

const character = document.getElementById('character');

let x = 0;
let y = 0;

function updateCharacterPosition() {
  character.style.transform = `translate(${x}px, ${y}px)`;
}

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'w':
      y -= 10;
      break;
    case 'a':
      x -= 10;
      break;
    case 's':
      y += 10;
      break;
    case 'd':
      x += 10;
      break;
  }

  updateCharacterPosition();
});

// Disable context menu
remote.getCurrentWebContents().on('context-menu', (e, params) => {
  e.preventDefault();
});
