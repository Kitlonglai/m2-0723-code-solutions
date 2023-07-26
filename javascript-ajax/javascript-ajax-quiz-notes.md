# javascript-ajax-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is AJAX?
  building dynamic webpages using xmlhttprequest to collect data and update parts of the DOM wihtout reloading the page
- What does the AJAX acronym stand for?
  asynchrous javascript and xml
- Which object is built into the browser for making HTTP requests in JavaScript?
  XMLHttpRequest
- What event is fired by `XMLHttpRequest` objects when they are finished loading the data from the server?
  load event which shows the request is complete and response data is available
- **Bonus Question**: An `XMLHttpRequest` object has an `addEventListener()` method just like DOM elements. How is it possible that they both share this functionality?
  they both share the same functionality due to to the xmlhttprequest objects being part of the browser api for client and server communication, eventlisteners can be attached to different types of objects including dom elements and xmlhttprequest objects to listen to events in ther browser

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
