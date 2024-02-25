# Deriving State from Props
Previously in the GmaeBoard Component, we had a `handleSelectSquare` function which updated the gameboard using rowIndex and colIndex and used the `activeSymbol` prop from the `App` component to update the `copied` gameboard immutably.

```JSX
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = activeSymbol;
      return updatedBoard;
    });

    onSelectSquare();
  }

```
<br>

However, instead, we use the new `turns` prop from the `App` component which looks like this:
```JSX
      setGameTurns(prevTurns => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer }, 
        ...prevTurns
      ];
    
      return updatedTurns
    });
  }
```
<br>

so in `GameBoard` component, we don't need to manage any state, but we are using some `derived state`, some computed value.

In this case the `turns` state is managed by the `App` component and we are deriving the gameboard from that `state`.


