const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('resetButton');
const resetScoreButton = document.getElementById('resetScoreButton');

const scoreXDisplay = document.getElementById('scoreX');
const scoreODisplay = document.getElementById('scoreO');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let scoreX = 0;
let scoreO = 0;

function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return gameBoard[a];
    }
  }

  if (!gameBoard.includes('')) return 'Empate';
  return null;
}

function handleClick(event) {
  const index = event.target.id.split('-')[1];
  if (gameBoard[index] !== '') return;

  gameBoard[index] = currentPlayer;
  event.target.textContent = currentPlayer;

  const winner = checkWinner();

  if (winner) {
    if (winner === 'Empate') {
      message.textContent = 'Empate!';
    } else {
      message.textContent = `${winner} venceu!`;

      if (winner === 'X') {
        scoreX++;
        scoreXDisplay.textContent = scoreX;
      } else {
        scoreO++;
        scoreODisplay.textContent = scoreO;
      }
    }

    board.removeEventListener('click', handleClick);
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    message.textContent = `Vez do ${currentPlayer}`;
  }
}

function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  cells.forEach(cell => cell.textContent = '');
  currentPlayer = 'X';
  message.textContent = `Vez do ${currentPlayer}`;
  board.addEventListener('click', handleClick);
}

function resetScore() {
  scoreX = 0;
  scoreO = 0;
  scoreXDisplay.textContent = scoreX;
  scoreODisplay.textContent = scoreO;
}

board.addEventListener('click', handleClick);
resetButton.addEventListener('click', resetGame);
resetScoreButton.addEventListener('click', resetScore);
