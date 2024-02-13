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