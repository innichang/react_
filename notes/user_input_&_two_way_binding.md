# User Input and Two way binding

### User Input
```JSX
<input type="text" required value={playerName} onChange={handleChange}>
```

In the input tag, which value was entered by a user?

the `onChange` will trigger for every keystroke and will provide us with an event object that contains the value that was entered by a user.

```JSX
function handleChange(event) {
  setPlayerName(event.target.value);
}
```

We receive the value `event` automatically because we're passing a pointer at the `handleChange` function to the `onChange` prop on the input element.

The event object will contain a `target` property, which refers to the element that did emit the event.

And the `input` element has a `value` property which will hold the value the user tried to enter, before it's then again overwritten by the value set through that value prop.


### Two Way Binding
Two Way Binding
  way of listening to a change on the input and then feeding that updated value back into this input

```JSX
export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  ....
}
```

Initially, we take the `initialName` prop and set it as the initial value of `playerName`

```JSX
  let editablePlayerName = <span className="player-name">{playerName}</span>;
```

Then we output the `playerName` state value in our `span` tag to show the initial player's name.

```JSX
  if(isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    )
  }
```

When the user click the `edit button`, the `editablePlayerName` changes into the `input` field with props `value` and `onChange`.
`onChange` listens to any change to the `value` and passes an `event` object to `handleChange`.

```JSX
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
```

This takes the `event` object through `onChange` prop and gets the target, which is the `input` and the `value` prop from the input, updating `playerName` to the input value.

when we click save, since we are using
```JSX
let editablePlayerName = <span className="player-name"> {playerName} </span>
```

we can dynamically show the changed value of `playerName`. 