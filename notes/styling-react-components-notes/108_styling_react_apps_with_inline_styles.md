# Styling React Apps with Inline Styles

You can style React apps in-line using the `style` prop.

The `style` prop takes dynamic values

```JSX
<p style={{
  color: 'red'
}}></p>
```



## PROS:
  1. quick & easy to add to JSX
  2. styles only affect the element to which you add them
  3. Dynamic(conditional) styling is simple

## CONS:
  1. need to know CSS
  2. you need to style every element individually
  3. No separation between CSS & JSX codes....