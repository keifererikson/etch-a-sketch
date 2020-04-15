const container = document.querySelector('.container');
const resetButton = document.querySelector('#reset');
const blackButton = document.querySelector('#black');
const colorButton = document.querySelector('#color');
let gameMode = 0;


resetButton.addEventListener('click', () => {
  reset();
});

blackButton.addEventListener('click', () => {
  reset();
  gameMode = 0;
  run();
});

colorButton.addEventListener('click', () => {
  reset();
  gameMode = 1;
  run();
});

function run() {
  const size = prompt('What grid size would you like?');
  createGrid(size);
} 

function createGrid(size) {
  let cellSize = 640 / size;
  
  
  for(i = 1; i <= size; i++) {
    let br = document.createElement('br');
    for(j = 1; j <= size; j++){
      let newCell = document.createElement('div');
      let alpha = 0.1;
      newCell.style.width = `${cellSize}px`;
      newCell.style.height = `${cellSize}px`;
      newCell.style.backgroundColor = `#FFF`;
      newCell.style.border = `1px solid #FCFCFC`;
      newCell.style.display = 'inline-block';
      
      if(gameMode == 0) {
        blackMode(newCell, alpha)
      } else if(gameMode == 1) {
        colorMode(newCell, alpha);
      }
      
      container.appendChild(newCell);
    }
    container.appendChild(br);
  }
}

function blackMode(newCell, alpha) {
  newCell.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = `rgb(0, 0, 0, ${alpha})`;
    alpha += 0.1;
  });
}

function colorMode(newCell) {
  newCell.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = `${'#'+Math.floor(Math.random()*16777215).toString(16)}`;
  });
}

function reset() {
  const divGrid = document.querySelectorAll('.container > div, br');
  
  divGrid.forEach((e) => {
    container.removeChild(e);
  });
}


