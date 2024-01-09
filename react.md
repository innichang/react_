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
