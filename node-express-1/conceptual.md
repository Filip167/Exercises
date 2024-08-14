### Conceptual Exercise

Answer the following questions below:

1. What are some ways of managing asynchronous code in JavaScript?

  1. Callbacks: Functions that are passed as arguments to other functions and executed after the completion of certain operations.
  2. Promises: Objects representing the eventual completion or failure of an asynchronous operation and its resulting value.
  3. Async/Await: Syntactic sugar built on Promises that allows for writing asynchronous code that looks synchronous, making it easier to read and maintain.
  4. Event Loop: JavaScript’s event loop handles asynchronous operations like I/O tasks, setTimeout, and Promises.

2. What is a Promise?

  Definition: A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It can be in one of three states: pending, fulfilled, or rejected.

3. What are the differences between an async function and a regular function?

  Async Function:
  An async function always returns a Promise, even if it does not explicitly return a Promise.
  Inside an async function, you can use the await keyword to pause the execution of the function until a Promise is resolved or rejected.
  Regular Function:
  A regular function returns whatever value it’s designed to return, which could be a primitive value, an object, or undefined.
  Regular functions do not have access to the await keyword and cannot pause execution for asynchronous operations.

4. What is the difference between Node.js and Express.js?

  Node.js:
  Node.js is a JavaScript runtime built on Chrome's V8 engine that allows you to run JavaScript on the server-side.
  It provides modules and tools for building server-side applications and managing asynchronous I/O operations.
  Express.js:
  Express.js is a web application framework built on top of Node.js.
  It simplifies the process of building web applications by providing a robust set of features for handling HTTP requests, routing, middleware, and more.

5. What is the error-first callback pattern?

  Definition: The error-first callback pattern is a convention used in Node.js where callbacks are passed as arguments to asynchronous functions, and the first argument of the callback is reserved for an error object.

6. What is middleware?

  Definition: Middleware is a function that has access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.

7. What does the `next` function do?

  Definition: In Express.js, the next function is used to pass control to the next middleware function in the stack.
  Usage: If a middleware function does not end the request-response cycle (by sending a response), it must call next() to move on to the next middleware. Otherwise, the request will hang and not be processed further.

8. What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
} ////

  Performance Issue: The code makes three sequential HTTP requests. Each request waits for the previous one to complete before starting. This could be improved by running the requests concurrently using Promise.all.
  Structure Issue: The returned array has the elements in a different order from the way the requests are made, which could be confusing.
  Naming Issue: The variable names are hardcoded to specific users. If this function is generalized to handle any list of usernames, more dynamic variable naming would be better.

  improvement: async function getUsers() {
  const urls = [
    'https://api.github.com/users/elie',
    'https://api.github.com/users/joelburton',
    'https://api.github.com/users/mmmaaatttttt'
  ];
  const users = await Promise.all(urls.map(url => $.getJSON(url)));
  return users; // Returns users in the order of URLs
}

