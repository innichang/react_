# When Not to Lift State Up
Using `useState` inside the `Player` component, the player name is updated on every keystroke.

If we lift the state up to the `App` component, that means the `App` component is re-rendered on every keystroke which is not good.

