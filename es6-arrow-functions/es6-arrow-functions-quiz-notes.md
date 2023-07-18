# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  delete function keyword and just have parameter with parenthesis. make an equal sign followed by a greater than sign.
- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  Implicit return of the expression, deletes return keyword
- When using _concise body syntax_, how do you return an object literal?
  Wrap the object literal in parentheses.
- In the expression
  `js
    foo(() => 42);
    `
  - Identify the arrow function
    () => 4
  - How many arguments does the arrow function take?
    0 due to no parameters
  - What value does it return?
    42
  - How many arguments are passed to the function `foo`?
    1
  - What type of argument is passed to the function `foo`?
    arrow function
- In the expression

  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```

  - Identify the arrow function
    (y) => { console.log(`4y = ${4 * y}`) }

  - How many arguments does the arrow function take?
    1 argument, y
  - What value does it return?
    no value is returned
  - How many arguments are passed to the function `bar`?
    1 argument
  - What type of argument is passed to the function `bar`?
    arrow function
  - When does the arrow function's code get executed?
    when bar function is invoked and the arrow function is called

- How does the value of `this` differ between standard functions and arrow functions?
  standard functions, "this" depends on the function call, refers to the object function is invoked. Arrow function, value of "this" is the same in the arrow function as in the scope its defined in

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
