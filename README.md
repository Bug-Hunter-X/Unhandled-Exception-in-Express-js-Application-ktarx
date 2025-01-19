# Unhandled Exception in Express.js Application

This repository demonstrates a common error in Express.js applications where exceptions are not properly handled, leading to silent failures.  The application includes a route that throws an error, but the error is not caught, causing the server to crash without providing any informative error messages.

## Bug

The `bug.js` file contains an Express.js application with a route (`/error`) that intentionally throws an exception.  However, there's no error handling mechanism in place to catch and manage this exception gracefully.  When the `/error` route is accessed, the server will crash silently, without returning any error response to the client.

## Solution

The `bugSolution.js` file presents a corrected version of the application.  It uses a `try...catch` block within the error-prone route to handle the exception appropriately.  This ensures that the application doesn't crash and that the client receives a more informative error response (e.g., a 500 Internal Server Error).

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory containing `bug.js`.
3. Run `node bug.js`.
4. Access the `/error` route (e.g., using `curl http://localhost:3000/error`). Observe that the server crashes.
5. Repeat with `bugSolution.js` to see the improved error handling.