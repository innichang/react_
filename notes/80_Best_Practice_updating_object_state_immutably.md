# Best Practice: Updating Object State Immutably

### BAD method
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
The above example uses 2 bracket notations to update the prevGameBoard, however this is a bad way when updating a state value based on previous state.

#### Important
  Objects & arrays(which technically are objects) are reference values in JavaScript.

  Therefore, it should not be mutated directly. 

  Instead, create a copy first.

  ### GOOD method
```JSX
function handleSelectSquare(rowIndex, colIndex) {
  setGameBoard((prevGameBoard) => {
    const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArrray])];
    prevGameBoard[rowIndex][colIndex] = 'X';
    return prevGameBoard;
  });
}
```
  This updates the state in an immutable way which is best practice.



