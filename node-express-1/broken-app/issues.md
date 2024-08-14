# Broken App Issues

## Issue 1: Async Mapping Problem
The original code used `map` with an async function, which returned unresolved promises. This was fixed by using `Promise.all` to resolve all promises concurrently.

## Issue 2: Missing `express.json()` Middleware
The original code did not parse the incoming JSON body, causing issues with accessing `req.body`. Added `express.json()` middleware to parse JSON request bodies.

## Issue 3: Error Handling Issue
The catch block did not include an error parameter, leading to undefined errors. This was fixed by adding `err` to the catch block.

## Issue 4: Incorrect Use of `map`
The `results.map` was used before the promises were resolved. This was corrected by mapping over the resolved data.
