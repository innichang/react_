# Lifting State Up
When we need to share information between two separate components, 
we need to do something called `Lifting the State up`.

We Lift the State Up to the closest ancestor component that has access
to all components that need to work with that state.

### What can be passed?
Both `function`, and `values` can both be passed via props to the child component.

When a `function` gets passed, it enables the child component to initiate the state change.