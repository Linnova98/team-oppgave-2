// const statusView = document.getElementById('status');
//       countView = document.getElementById('count');
// let activeListPiece, count = 0;

// function boardPiece(element) {
//     if (!activeListPiece || element.classList.contains('show')) return;
//     if (element.classList.contains(activeListPiece.className)) {
//         element.classList.add('show');
//         activeListPiece.style.opacity = 0.5;
//         activeListPiece = undefined;
//         count++;
//         countView.innerText = count;
//         if (count === 9) {
//             statusView.style.backgroundColor = '#43b581';
//         }
//     }
// }

// function listPiece(element) {
//     activeListPiece = element;
// }

// Old code from school, with some changes to work now
const statusView = document.getElementById("status");
const countView = document.getElementById("count");
const board = document.getElementById("board");
const list = document.querySelector(".list");
let count = 0;

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.className);
}

function drop(event) {
  event.preventDefault();
  let pieceClass = event.dataTransfer.getData("text");
  let target = event.target;

  if (
    !target.classList.contains("show") &&
    target.classList.contains(pieceClass)
  ) {
    target.classList.add("show");
    document.querySelector(`.${pieceClass}[draggable='true']`).remove();
    count++;
    countView.innerText = count;

    if (count === 9) {
      statusView.style.backgroundColor = "#43b581";
    }
  }
}

document.querySelectorAll(".list div").forEach((piece) => {
  piece.setAttribute("draggable", "true");
  piece.addEventListener("dragstart", drag);
});

document.querySelectorAll(".board > div > div").forEach((cell) => {
  cell.addEventListener("dragover", allowDrop);
  cell.addEventListener("drop", drop);
});
