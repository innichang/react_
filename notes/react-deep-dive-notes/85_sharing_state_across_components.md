# Sharing State across components
So in the `App` component, we have a state.
```JSX
  const [gameTurns, setGameTurns] = useState([]);
```
this initiates the value with an empty array.

On each click, in the `App` component, `turns` is updated through the `GameBoard` component using `onSelectSquare` and `handleSelectSquare`. 

And using the `turns` updated from `handleSelectSquare`, which is passed into the `Log` component, and prints out the logs of the game.

