grid = document.querySelector("#grid");
console.log(grid); // Add this line

function createGrid() {
  for (let row = 0; row < 16; row++) {
    for (let col = 0; col < 16; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      grid.appendChild(cell);
    }
  }
}

createGrid();