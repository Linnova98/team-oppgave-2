const statusView = document.getElementById('status');
      countView = document.getElementById('count');
let activeListPiece, count = 0;

function boardPiece(element) {
    if (!activeListPiece || element.classList.contains('show')) return;
    if (element.classList.contains(activeListPiece.className)) {
        element.classList.add('show');
        activeListPiece.style.opacity = 0.5;
        activeListPiece = undefined;
        count++;
        countView.innerText = count;
        if (count === 9) {
            statusView.style.backgroundColor = '#43b581';
        }
    }
}

function listPiece(element) {
    activeListPiece = element;
}