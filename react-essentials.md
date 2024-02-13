# React Essentials

### Components

- Apps built by combining components
- UI = combinations of components
- HTML, CSS, JS files can all be components

#### Why Components?

##### 1. Reusable Building Blocks
    - create small building blocks & compose the UI from them
    - reuse a building block in different parts of the code

##### 2. Related Code Lives Together
    - related HTML, JS and possibly CSS files are stored together
    - since JS influences the output, storing HTML & JS together makes sense

##### 3. Separation of Concerns
    - different components handle differet data & logkc
    - simplifies the process of working on complex apps

---

### JSX

- Javascript Syntax Extension: JSX
- describe and create HTML elements by writing HTML markup codes inside JS files
- **NOT** supported by browsers
- JSX files are transformed before reaching the browser

##### 2 Rules Component Functions Must Follow
    1. Name Starts with Uppercase character
        - Multi-word names written in PascalCase
        - recommended to pick names that describes the UI(e.g. "Header" or "MyHeader")

    2. Return "Renderable" Content
        - must return value that can be rendered by the browser
        - in most cases: return jsx.
        - also allowed: string, number, boolean, null, and array of allowed values

---
### How Components Get Rendered

    - Root Component: the first component to be analyzed & rendered by React
    - Nested Component: a child component of its parent component 

The root component is rendered, which renders series of nested components.
This is called a **tree of components**.

Tree of components is just analyzed by React, and React then combines all the JSX code from all the components to generate the overall DOM.

---

### Build-in Components VS Custom Components

##### - Build-in Components
    - rendered as DOM nodes by React
    - name starts with lowercase character
    - only valid, officially defined HTML elements are allowed

##### - Custom Components
    - just functions, are executed as functions as React
    - name starts with Uppercase character
    - React "traverses" the component tree until it has only build-in components left

---

#### Review
##### What does React do with the components you use in the JSX code? <br>
    - React derives a component tree that's then used to perform commands that update the website DOM.

##### How do you typically use custom components? <br>
    - use custom components like HTML elements inside of JSX code

---

### Dynamic values in React

```JS
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>{description} React concepts you will need for almost any app you are going to build!</p>
    </header>
  );
}
```
- use curly braces to expression JS code inside HTML
- **CANNOT** use if-statements, for-loops, function definitions and other block statements
- Only expressions that directly produces a value

### Dynamically rendering images
```JS
<img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
```
- src attribute value is not the best way of loading images
- image might get lost or ignored during deployment from whats called a **bundling process**

##### Use import statements
```JS
import reactImg from './assets'

<img src={reactImg} alt="Stylized atom" />
```
---
### Making Components Reusable with Props

##### Concept of props
- being able to pass data into components and to then use that data in there
- concept of being able to configure components

```JS
<CoreConcept title="Components" description="" />
```
- here 'title' and 'description' is called 'prop'
- React component functions accept only ONE parameter. Usually named 'props'

#### Review
##### Which values can be output as dynamic values in JSX (i.e., between curly braces)? <br>
    - Any valid Javascript expression.

##### How can you assign a dynamic value to an HTML element attribute? <br>
    - Via the same syntax you use for dynamic values in JSX in general: Curly braces

---

### Best Practice: Storing Components in Files & Using a Good Project Structure

#### Components
- It's not recommended to have all the components in the same file, because longer the code gets, it's harder to keep track of all the components in one file.
- So it's good to make everything into component files

#### CSS
- CSS can be split into component-specific files
- but without special configuration, the CSS files are not scoped to the specific component, so it can be used anywhere else.

---

### Component Composition: The special "children" Prop [Core Concept]

```
<TabButton>Content</TabButton>
```
- if something is passed is between the opening and closing component tags, the content inside is by default not output because React doesn't know where to output it without any specification.

#### Use of 'children' prop
- set by React 
- simply refers to the text between component text
- can be as simple as a text, or some complex JSX structure if needed

##### Component Composition
- When your component wraps other Components or other content, it is component composition

#### Component Composition vs Using Attributes

##### 1. Component Composition(using default children prop)
```JS
//App Component
<TabButton>Component</TabButton>

//TabButton Component
function TabButton({children}) {
    return <button>{children}</button>;
}
```
- for components that take a single piece of renderable content.
- closer to 'normal HTML usage'
- convenient when passing JSX code as a value to another component

##### 2. Using Attributes
```JS
//App Component
<TabButton label="Component" />

//TabButton Component
function TabButton({label}) {
    return <button>{label}</button>;
}
```
- for situations where you have multiple smaller pieces of information that must be passed to a component
- adding extra props instead of just wrapping content with the component tags mean extra work

---

### Reacting to Events
- in vanilla JS, you interact with the DOM, add even listeners to make buttons reactive
- in React, special attribute are added to the elements, and they are called props(because in the end the build-in elements are just another component)
- onClick prop 

```JS
export default function TabButton({ children }) {
  function handleClick () {
    console.log("Hello World!");
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
```
- The advantage of defining these event handler functions inside the component function is that they have access to the component's props and state.
- you don't want to write onClick={handleClick()} because you don't want the function to execute when the page loads, but executed when the button is clicked. You want to use the function as a value.


### Passing Custom Arguments to Event Functions

```JSX
<TabButton onSelect={handleSelect}>Components</TabButton>
```

Instead of passing in a raw function as above,
we can pass an arrow function like below

```JSX
<TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
```

#### Review
##### What's the purpose of the special "children" prop? <br>
 - You can use it to pass and use content between your component's opening & closing tags.
<br>

### How NOT to Update the UI - A Look Behind The Scenes of React
- By default, React components execute **ONLY ONCE**.
- You have to "tell" React if a component should be executed again

#### How React Checks If UI Updates are needed
- 

### Managing States & Using Hooks
#### State
- registering variables that are handled by react and that are updated by the help of a function provided by react, that will also tell React that data changed and that will therefore cause React to update the UI

```JS
import { useState } from 'react';
```

- all functions that start with 'use' provided by React are hooks
- only be called in React component functions or other react hooks
- must call hook functions directly inside component function NOT nested inside of other code
- must call on the top level of the component function

#### 2 Important RULES of Hooks
1. Only call Hooks inside of Component Functions
  - React Hooks must not be called outside of React component functions
2. Only call Hooks on the top level
  - React Hooks must not be called in nested code statements(e.g., inside of if-statements)

#### useState
- manage component specific state(data stored by React, which when changed will trigger the component function to which the hook belongs to be re-executed/re-evaluated)
- does accept argument (default value you want React to store)
- can be stored in a variable
- will return an array which includes exactly 2 elements
- manage data & "tell" React to re-execute a component function via react's useState() Hook

State updates lead to new state value(as the component function executes again)

```JS
const [ counter, setCounter ] = useState(0);
```

###### counter
- current state value. provided by React. 
- May change if the component function is executed again
###### setCounter
- State updating function
- updates the stored value & "tells" React to re-execute the component function in which useState() was called
- a function provided by React that can be executed to update this state
###### 0
- initial state value stored by React
<br>

When calling setCounter,  will tell React that the component function here must be executed again

'const' can be used for useState because it will be recreated everytime component is executed

Behind the scenes, React will store and update the actual value which will then be passed on to the constant when the component function executes again

```JS
const [ selectedTopic, setSelectedTopic] = useState("Please click a button");

function handleSelect(selectedButton) {

	setSelectedTopic(selectedButton);
	
	console.log(selectedTopic);

}
```
When in the browser updating the component with **setSelectedTopic**, the console log prints the previous selectedTopic, not the selectedTopic updated by setSelectedTopic.

when `setSelectedTopic(selectedButton)` is called, React in the end schedules the state update and it then re-executes the component function.

Therefore, the updated value will only be available after the component function is executed

SO, the log after the scheduled update doesn't immediately print the new value.

It gets stored AFTER the component reload. 

### CSS Styling & Dynamic Styling

- use 'className' instead of 'class' in JSX files

### Outputting List Data Dynamically

```JS
{CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem}/>)}

{/* <CoreConcept {...CORE_CONCEPTS[0]} />

<CoreConcept {...CORE_CONCEPTS[1]} />

<CoreConcept {...CORE_CONCEPTS[2]} />

<CoreConcept {...CORE_CONCEPTS[3]} /> */}
```

instead of using the bracket notation for each elements in the array, you can use the map method and display data dynamically

#### WHY use a key prop?
- to tell each data apart using a unique key

### What I learned
- Component
- JSX
- Props
- State
- create and use components -> simply a function
 - must start with uppercase character
 - must have a return value that can be rendered by React (JSX code)
 - can use component functions as if they were custom HTML elements inside of JSX code
 - configure components with props
 - spread an entire object as key value pairs

- study more about object destructuring in props
- AND
- props dot notation destructuring in components

- output dynamic content with curly braces
- output between tags as attribute values

**special children prop**

- listen to events using special 'on' props

- to update the UI, you must use useState (hook)

- manage and update data, which when updated will cause the component function to which the state belongs to execute again so that the JSX code is also reevaluated
