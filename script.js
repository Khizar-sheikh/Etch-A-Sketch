const gridContainer = document.querySelector("#gridContainer");
const gridSizeRange = document.querySelector("#sizeRange");
const sizeValue = document.querySelector("#sizeValue");
const clearGrid = document.querySelector("#clear");
const colorBtn = document.getElementById('color')
const rainbowBtn = document.getElementById('rainbow')
const eraserBtn = document.getElementById('eraser')
const colorPicker = document.getElementById('colorPicker')

clearGrid.addEventListener("click", removeBgColor);
colorPicker.addEventListener('input' ,setCurrentColor)
colorBtn.addEventListener("click", () => setCurrentMode('color'));
rainbowBtn.addEventListener("click", () => setCurrentMode('rainbow'));
eraserBtn.addEventListener("click", () => setCurrentMode('eraser'));

let currentColor = colorPicker.value;
let currentMode = 'color';

function setCurrentColor() {
   currentColor = colorPicker.value;
}
function setCurrentMode(newMode){
currentMode === newMode;
activateButton(newMode)
}

function activateButton(newMode) {
  if (currentMode === newMode) {
    return;
  }

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

  currentMode = newMode;
}




function removeBgColor() {
  const gridItems = document.querySelectorAll(".grid_item");
  gridItems.forEach(function(gridItem) {
    gridItem.style.backgroundColor = "white";
  });
}


gridSizeRange.addEventListener('input', function() {
  const gridNo = parseInt(gridSizeRange.value);
  gridMaker(gridNo);
  updateSizeValue(gridNo);
});

function updateSizeValue(gridNo) {
  sizeValue.textContent = `${gridNo} X ${gridNo}`;
}



function gridMaker(gridNo) {
  gridContainer.innerHTML = '';
  let gridSize = gridNo * gridNo;

  const containerWidth = gridContainer.offsetWidth;
  const containerHeight = gridContainer.offsetHeight;
  const itemWidth =( Math.floor(containerWidth / gridNo)+'pt'); 
  const itemHeight = (Math.floor(containerHeight / gridNo)+'pt');

  for (let i = 1; i <= gridSize; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid_item');
    gridContainer.appendChild(gridItem);
    gridItem.style.width = `${itemWidth}px`; 
    gridItem.style.height = `${itemHeight}px`;
    gridContainer.style.gridTemplateColumns = `repeat(${gridNo}, 1fr)`; 
    gridContainer.style.gridTemplateRows = `repeat(${gridNo}, 1fr)`;  
    gridItem.addEventListener('mouseover',changeColor);
    gridItem.addEventListener('mousedown',changeColor);
  }
}
gridMaker(16);
let mouseDown = false;

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeColor(e) {
  if (e.type === 'mouseover' && !mouseDown) return;

  const gridItem = e.target;

  if (currentMode === 'rainbow') {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    gridItem.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else if (currentMode === 'color') {
    gridItem.style.backgroundColor = currentColor;
  } else if (currentMode === 'eraser') {
    gridItem.style.backgroundColor = '#fefefe';
  }
}


