grid = document.querySelector("#grid");

function createGrid() {
  for (let row = 0; row < 16; row++) {
    for (let col = 0; col < 16; col++) {
      const cell = document.createElement("div");
      const cellNumber = "cell" + ((row * 16) + col);
      cell.classList.add("cell");
      cell.id = cellNumber;
      grid.appendChild(cell);
    }
  }
}

createGrid();

cell = document.querySelectorAll(".cell");

cell.forEach(cell => { cell.addEventListener(
  "mouseenter",
  (event) => {
    event.target.style.backgroundColor = "green";
    }
  )  
});