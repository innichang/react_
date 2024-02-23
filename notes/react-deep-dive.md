JSX code is a non-standard feature, not supported by the browser, therefore, the code in JSX file is not the code that ends up in the browser

React Code goes through a build process that makes it work in the browser

- Changes & Optimizes your code
- Transforms it such that it runs in the browser
- Also(potentially) optimizes other assets like CSS & image files

and creates a Deployable File

- A collection of generated files that include your optimized code and any other extra assets (e.g., CSS code files, optimized images etc)

### Working with Fragments

```JS
return (
  <div>
    <Header />
    <main>
      //  some content here
    </main>
  </div>
)
```

- if we delete the <div> tag, we get an "JSX expressions must have one parent element" error since Header and main are sibling elements

- However, having extra <div> element in DOM is unnecessary.

#### Fragment Component

- used as a wrapper when you need to wrap sibling components but don't want to render an actual element to the screen

**Alternative Methods**

```JS
import { Fragment } from "react";

return (
  <Fragment>
    <Header />
    <main>
      //  some content here
    </main>
  </Fragment>
)
```

```JS
return (
  <>
    <Header />
    <main>
      //  some content here
    </main>
  </>
)
```

---

### Problem: Props Are Not Forwarded To Inner Elements

When you are setting props on a custom component, those props are not automatically forwarded to the JSX code used inside of that component.

For example if I have a component called section which takes props and children prop like the following

```JSX
  <Section title="Examples" id="examples />
```

the id is not going to be automatically forwarded to the Section component

```JSX
export default function Section({ title }) {
  return (
    <section>
      <h2>{ title }</h2>
    </section>
  )
}
```

So whatever attribute the id 'examples' have, the Section component will not be able to receive it.

### Using Forwarded Props A.K.A. Proxy Props to Wrapped Elements

- Original Code

```JSX
export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li>
  );
}
```

<br>

- Modified Code using Proxy Props

```JSX
export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} { ...props }>{children}</button>
    </li>
  );
}
```

### Working with Multiple JSX Slots

Using multiple sibling elements together as a value is NOT Allowed.

If using JSX code as a value in some place, no matter if that place is the value being returned in a component or a value being stored in a variable, you have to make sure that there's only one root element in that place.


```JSX
return (
    <Section title="Examples" id="examples">
      <Tabs
        buttonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
```
<br>
As the code above, we can instead put a parent component of our choice e.g. "div", "menu" etc, so that we can return multiple components at the same time.
In the example above, a fragment is used '<>' to indicate that we are not setting an explicit component.
<br>
When passing in the prop buttonsContainer, if you want to use a built-in-html component you must set it as String.

```JSX
buttonsContainer="menu";
buttonsContainer="div";
```
<br>
However, if you want to set it as a custom component,
you have to contain it inside curly brackets and JUST use the component name.

```JSX
buttonsContainer={Section};
buttonsContainer={CoreConcepts};
```

<br>

```JSX
export default function Tabs({ children, buttons, buttonsContainer }) {
  const ButtonsContainer = buttonsContainer;

  return (
    <>
      <ButtonsContainer>{ buttons }</ButtonsContainer>
      { children }
    </>
  );
}
```
The Tabs Component receives the buttons and renders it to the screen. If we directly use the buttonsContainer value in the <>, it would be
```JSX
<buttonsContainer></buttonsContainer>
```
The problem with this is that react would look for built-in-component called 'buttonsContainer' but no such built-in-component exists. 
So we have the define the buttonsContainer value and store it in a different value, but this value MUST be capital letter first
```JSX
const ButtonsContainer = buttonsContainer;
return (
  <ButtonsContainer></ButtonsContainer>
)
```
<br>

### Setting Default Prop Values

```JSX
export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
```
This would set the default value of ButtonsContainer to "menu"
