# fetch-in-react-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How can `useEffect` be used to load data for a component?
  to fetch data when a component is mounted to DOM
- What browser function can be used to make HTTP requests to a server in React?
  fetch api call
- How do you use `useEffect` to load component data just once when the component mounts?
  by passing an empty array for the second argument in useEffect, so effect isn't dependent on any props or state, it doesnt have to rerun
- How do you use `useEffect` to load component data every time the data key changes?
  by putting the data key into the dependency array of useEffect
- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  using a state management library such as react-query, apollo-client, redux, mobx, react context api

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
