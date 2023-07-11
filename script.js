const gridContainer = document.querySelector("#gridContainer");
const gridSizeRange = document.querySelector("#sizeRange");
const sizeValue = document.querySelector("#sizeValue");
const clearGrid = document.querySelector("#clear");
clearGrid.addEventListener("click", removeBgColor);

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
  const itemWidth = Math.floor(containerWidth / gridNo); // Use Math.floor to ensure integer division
  const itemHeight = Math.floor(containerHeight / gridNo);

  for (let i = 1; i <= gridSize; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid_item');
    gridContainer.appendChild(gridItem);
    gridItem.style.width = `${itemWidth}px`; // Remove the subtraction of 2
    gridItem.style.height = `${itemHeight}px`;
    gridContainer.style.gridTemplateColumns = `repeat(${gridNo}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridNo}, 1fr)`;
    
  gridItem.style.backgroundColor = "black";
  }
}
