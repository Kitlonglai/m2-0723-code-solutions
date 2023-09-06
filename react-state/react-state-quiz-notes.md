# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  special functions only found while React is rending. it allows you to hook into different react features.
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

1. must start with "use"
2. can only be called at top level of component
3. cant call hooks inside nested functions, loops, or conditions

- What is the purpose of state in React?
  state is a built in object in react components that influences the behavior of a component and can be modified over time
- Why can't we just maintain state in a local variable?
  because local variables cant trigger rerendering when its value changes
- What two actions happen when you call a `state setter` function?
  update state variable and triggers react to render the component again
- When does the local `state variable` get updated with the new value?
  on the next render after the component updates

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
