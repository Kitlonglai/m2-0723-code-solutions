# http-messages-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a client?
  hardware or software that accesses a service made by a server through a network or within the same computer
- What is a server?
  hardware or software that provides functionalities or services for clients such as sharing data or performing conputations
- Which HTTP method does a browser issue to a web server when you visit a URL?
  post method sends data to server, successive identical post have additional effects, which is the main difference to a put. Post request is sent by an html form and changes the server
- What three things are on the start-line of an HTTP **request** message?
  http method, request target, http version
- What three things are on the start-line of an HTTP **response** message?
  protocol version, status code, status text
- What are HTTP headers?
  let client and server pass additional info with an http request or response, which consists of case-insensitive name followed by colon followed by its value. Can be grouped by request, response, representation and payload headers
- Where would you go if you wanted to learn more about a specific HTTP Header?
  mdn web docs
- Is a body required for a valid HTTP request or response message?
  no, responses with a status code that sufficiently answers the request without need for corresponding payload dont need a body

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
