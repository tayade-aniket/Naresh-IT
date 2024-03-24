let rows = 5;
let columns = 5;

let currTile;
let otherTile;

let turn = 0;

window.onload = function () {
  // initialize the 5x5 board
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      // create img element
      let tile = document.createElement("img");
      tile.src = "./images/blank.jpg";

      // Drag and Drop functionality
      tile.addEventListener("dragstart", dragStart);
      tile.addEventListener("dragover", dragOver);
      tile.addEventListener("dragenter", dragEnter);
      tile.addEventListener("dragleave", dragLeave);
      tile.addEventListener("drop", dragDrop);
      tile.addEventListener("dragend", dragEnd);

      document.getElementById("board").append(tile);
    }
  }
};

// peices
let peices = [];
for (let i = 1; i <= rows * columns; i++) {
  peices.push(i.toString());
}

peices.reverse();

for (let i = 0; i < peices.length; i++) {
  let j = Math.floor(Math.random() * peices.length);

  // swaping images
  let tmp = peices[i];
  peices[i] = peices[j];
  peices[j] = tmp;
}

for (let i = 0; i < peices.length; i++) {
  let tile = document.createElement("img");
  tile.src = `./images/${peices[i]}.jpg`;

  // Drag and Drop functionality
  tile.addEventListener("dragstart", dragStart);
  tile.addEventListener("dragover", dragOver);
  tile.addEventListener("dragenter", dragEnter);
  tile.addEventListener("dragleave", dragLeave);
  tile.addEventListener("drop", dragDrop);
  tile.addEventListener("dragend", dragEnd);

  document.getElementById("peices").append(tile);
}
