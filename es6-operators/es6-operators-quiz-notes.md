# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  &&: checks left then right operands
  ||: checks left operand if true then returns truthy
  They can be used outside if statements to make conditional code
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  If result of one conversion is false, && stops and returns value of falsy operand and doesnt evaluate any remaining operand.
  For ||, expression is not evaluated after some truthy expression, which occurs due to value of operator already determined after evaluation of first operand
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  makes a default value when left side operand is null or undefined, differs from || because it checks for nullish values instead of truthy values
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  short hand way used for conditional expressions with 3 operands, condtion, truthy expression and falsy expression
- What is the `?.` (optional chaining) operator? When would you use it?
  access properties or call methods, can return undefined if null/undefined. use variable name followed by ?. and property name
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  allows iterable to be expanded in places where arguments or elements are expected. use [...array]to spread it into a new array. with objects use { ...obj } to spread its properties to new object
- What data types can be spread into an array? Into an object?
  strings, arrays, function arguments
- How does spread syntax differ from rest syntax?
  opposite as spread expands an array into its elements, rest turns multiples elements into 1

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
