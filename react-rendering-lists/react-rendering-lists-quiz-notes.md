# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?
  when we want to show several instances of the same component using different data, such as lists of names or a photo gallery.

- Why is it important for React components to be data-driven?
  so components and uis are responsive to changing data
- Where in the component code would a list of React components typically be built?
  in the function body
- What `Array` method is commonly used to create a list of React components?
  map()
- Why do components in a list need to have unique keys?
  allows us to uniquely identify list items in an array from its siblings so we arent depending on its order within the array
- What is the best value to use as a "key" prop when rendering lists?
  the best value to use is the id or number property from the array

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
