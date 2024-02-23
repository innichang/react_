# Updating state based on old state

#### Bad Example
```JSX
const [isEditing, setIsEditing] = useState(false);

function handleEditClick() {
  setIsEditing(!isEditing ? true : false);
}
```

  If your new state depends on your previous state value, it isn't recommended, or it's even **BAD** to update the state using an expression.

  ## A function should pass a function to the state updating function.


```JSX
function handleEditClick() {
  setIsEditing(wasEditing => !wasEditing);
}
```

  Above is 'passing a function' example.

  This function will automatically be called by React and will receive the guaranteed latest state value