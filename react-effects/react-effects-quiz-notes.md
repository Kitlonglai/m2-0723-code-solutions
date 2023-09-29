# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  when a component is being created and inserted in the DOM
- What is a React Effect?
  side effects that are caused by rendering itself rather than by an event.
- When should you use an Effect and when should you not use an Effect?
  use effect when writing asychronous tasks
  not use when there is no external system involved such as updating a state
- When do Effects run?
  after each complete render
- What function is used to declare an Effect?
  useEffect()
- What are Effect dependencies and how do you declare them?
  values from component that effect depends on. You can declare it by adding it to the dependency array passed in the useEffect function
- Why would you want to clean up from an Effect?
  to prevent memory leaks and unwanted behaviors and effect is run again
- How do you clean up from an Effect?
  returning a function from effect that cleans up
- When does the cleanup function run?
  when component is rerendered or unmounted

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
