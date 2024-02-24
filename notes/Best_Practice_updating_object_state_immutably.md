# Best Practice: Updating Object State Immutably
```JSX
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  
  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      prevGameBoard[rowIndex][colIndex] = 'X';
      return prevGameBoard;
    });
  }
}
```

