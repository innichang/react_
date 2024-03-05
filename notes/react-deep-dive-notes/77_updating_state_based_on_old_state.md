# Updating state based on old state

#### Bad Example
```JSX
const [isEditing, setIsEditing] = useState(false);

function handleEditClick() {
  setIsEditing((editing) => !editing);
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


##### Why should a function be passed?

  This function will automatically be called by React and will **receive the guaranteed** latest state value

  By nature, the state updates are basically **schedueld** by React.
  The meaning of this is quite simple.

```JSX
function handleEditClick() {
  setIsEditing(!isEditing);
  setIsEditing(!isEditing);
}
```

  The function `handleEditClick` with 2 setIsEditing updating the state.
  If the initial value of `isEditing` is `true`, called `setIsEditing` twice would mean

```JSX
  setIsEditing(!isEditing) //isEditing value would become 'false'
  setIsEditing(!isEditing) /*since isEditing value became 'false' 
                            in the previous function, now it 
                            will become 'true'*/
```
-----

  However due to a special characteristic of React, that is not the case.

  with both `setIsEditing` function inside `handleEditClick` function, React is scheduling the state updates, and both are based on the current value of `isEditing`.
  so both `setIsEditing` takes the same `isEditing` value.

  Behind the scenes, React is basically `scheduling` those state update functions, 
  meaning the state update functions are not performed instantly.
  It is scheduled by React to be performed in the future.

  Then what happens is that when the component is rendered the initial state values are passed into the state updating function and is 'scheduled' for it to be used by the user.

  which means, if the initial value of `isEditing` is `true`, however many `setIsEditing` function is called, the output will always be `false`.

-----

To prevent such problem, we use the function for updating the state instead.
```JSX
  setIsEditing(editing => !editing);
```
If updating the state based on a previous state value, function form should be used.
  