const container = document.querySelector(".grid-container");

function makeRows(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++){
      const gridElement = document.createElement('div');
      gridElement.classList.add('grid-item');
    //   gridElement.addEventListener('mouseover', changeColor);  for next function, with changing color 
    //   gridElement.addEventListener('mousedown', changeColor);  
      container.appendChild(gridElement);
    }
  }


makeRows(16);