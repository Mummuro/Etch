const container = document.querySelector(".grid-container");
const rangeSize = document.getElementById("sizeSlider").value;
const colorPicker = document.getElementById('colorPicker');
const colorBtn = document.querySelector('.colorMode');
const rainbowBtn = document.querySelector('.rainMode');
const eraserBtn = document.querySelector('.eraseMode');
const clearBtn = document.querySelector('.clearAll');

const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE
let mouseDown = false


document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)
colorPicker.oninput = (e) => setCurrentColor(e.target.value)
colorBtn.onclick = () => setCurrentMode('color')
rainbowBtn.onclick = () => setCurrentMode('rainbow')
eraserBtn.onclick = () => setCurrentMode('eraser')
clearBtn.onclick = () => reloadGrid()

function makeRows(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++){
      const gridElement = document.createElement('div');
      gridElement.classList.add('grid-item');
      gridElement.addEventListener('mouseover', changeColor);  // for next function, with changing color 
      gridElement.addEventListener('mousedown', changeColor);  
      container.appendChild(gridElement);
    }
  }


function changeSize(value) {
    setCurrentSize(value);
    updateSizeValue(value);
    reloadGrid();
  }

function setCurrentColor(newColor) {
  currentColor = newColor;
}
  
function setCurrentMode(newMode) {
  activateButton(newMode);
  currentMode = newMode;
}

function setCurrentSize(newSize) {
  currentSize = newSize;  
}

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`;
}

function reloadGrid() {
  clearGrid();
  makeRows(currentSize);
}

function changeColor(e) {
  if (e.type === 'mouseover' && !mouseDown) return
  if (currentMode === 'rainbow') {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else if (currentMode === 'color') {
    e.target.style.backgroundColor = currentColor;
  } else if (currentMode === 'eraser') {
    e.target.style.backgroundColor = '#fefefe';
  }
}

function reloadGrid() {
  clearGrid();
  makeRows(currentSize);
}

function clearGrid() {
  container.innerHTML = '';
}

function activateButton(newMode) {
  if (currentMode === 'rainbow') {
    rainbowBtn.classList.remove('active');
  } else if (currentMode === 'color') {
    colorBtn.classList.remove('active');
  } else if (currentMode === 'eraser') {
    eraserBtn.classList.remove('active');
  }

  if (newMode === 'rainbow') {
    rainbowBtn.classList.add('active');
  } else if (newMode === 'color') {
    colorBtn.classList.add('active');
  } else if (newMode === 'eraser') {
    eraserBtn.classList.add('active');
  }
}

window.onload = () => {
  makeRows(DEFAULT_SIZE);
  activateButton(DEFAULT_MODE);
}






