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

```
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
```
<img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
```
- src attribute value is not the best way of loading images
- image might get lost or ignored during deployment from whats called a **bundling process**

##### Use import statements
```
import reactImg from './assets'

<img src={reactImg} alt="Stylized atom" />
```
---
### Making Components Reusable with Props

##### Concept of props
- being able to pass data into components and to then use that data in there
- concept of being able to configure components

```
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
```
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
```
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

```
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



