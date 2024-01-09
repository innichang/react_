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
