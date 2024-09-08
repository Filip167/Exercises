### Conceptual Exercise

Answer the following questions below:

1. What is a JWT?
A JWT (JSON Web Token) is a compact, URL-safe token format used to securely transmit information between parties as a JSON object. It contains three parts: a header, a payload, and a signature. JWTs are often used for authentication and authorization purposes, allowing servers to trust a user's identity without needing to access the user's credentials repeatedly.

2. What is the signature portion of the JWT? What does it do?
The signature is the third part of a JWT and is created by encoding the header and payload with a secret key using a specified algorithm (such as HMAC SHA256). The purpose of the signature is to verify that the sender of the JWT is who it says it is and to ensure that the message wasn’t altered during transit. If the signature is invalid or tampered with, the JWT is considered invalid.

3. If a JWT is intercepted, can the attacker see what's inside the payload?
Yes, since the payload of a JWT is base64-encoded (not encrypted), anyone who intercepts the token can decode it and see the contents, including claims like user details. However, they cannot modify it without invalidating the signature, making it harder to tamper with the token.

4. How can you implement authentication with a JWT? Describe how it works at a high level.
Login: When a user logs in with valid credentials, the server generates a JWT that contains user-specific information (payload) and signs it with a secret key.
Client stores JWT: The token is sent back to the client, typically stored in localStorage or cookies.
Send token with requests: The client includes this JWT in the Authorization header (usually as Bearer <token>) when making subsequent requests to protected routes.
Server verifies JWT: The server verifies the token by checking its signature. If the token is valid, the server allows access to the requested resource.
5. Compare and contrast unit, integration, and end-to-end tests.
Unit tests: Test individual units (functions, methods) in isolation to verify they work as expected. Fast and simple, but limited in scope.
Integration tests: Test how different modules or units work together to ensure proper communication and data flow between them.
End-to-end tests: Simulate real user interactions with the full application, testing the entire workflow from front-end to back-end. They provide the highest level of confidence but are slower and more complex to maintain.
6. What is a mock? What are some things you would mock?
A mock is a simulated object or function used in testing to mimic the behavior of real objects. Mocks replace real components to test how the unit under test behaves in different scenarios without relying on external systems. You might mock:

External APIs
Database connections
File systems
Third-party services (e.g., email, payment gateways)
7. What is continuous integration?
Continuous Integration (CI) is a development practice where developers frequently integrate their code into a shared repository, often multiple times a day. Each integration triggers an automated build and test process, allowing teams to detect errors early and improve code quality. Popular CI tools include Jenkins, CircleCI, and Travis CI.

8. What is an environment variable and what are they used for?
An environment variable is a dynamic value that the operating system or environment can use to configure or control the behavior of applications. Environment variables are often used to store sensitive or environment-specific information, such as API keys, database credentials, or configuration settings, making it easier to manage different environments (development, production, etc.).

9. What is TDD? What are some benefits and drawbacks?
Test-Driven Development (TDD) is a software development process where tests are written before the actual code. Developers first write a test case that defines a desired function or behavior, then write the minimum code needed to pass the test, and finally refactor the code while keeping the tests passing.

Benefits:

Leads to more robust, bug-free code
Ensures better code coverage
Encourages better design and modularity
Drawbacks:

Slows down initial development speed
Can be difficult for complex features
Requires discipline to follow rigorously
10. What is the value of using JSONSchema for validation?
JSONSchema provides a standardized way to validate the structure and contents of JSON data. It allows developers to enforce rules (such as data types, required fields, and value ranges) to ensure the integrity of incoming or outgoing JSON objects. Using JSONSchema helps catch invalid data early, reducing errors in data processing and improving API reliability.

11. What are some ways to decide which code to test?
Critical functionality: Code that, if it fails, could break the application or affect users significantly (e.g., authentication, payment processing).
Complex logic: Code with many branches, edge cases, or complex calculations.
External dependencies: Code that interacts with external systems like databases or third-party APIs.
Recently changed code: Any code that has been modified recently should be retested.
High-risk code: Code that could potentially introduce vulnerabilities or bugs.
12. What does RETURNING do in SQL? When would you use it?
The RETURNING clause in SQL is used to return values from rows affected by INSERT, UPDATE, or DELETE statements. It’s useful when you want to get back data such as auto-generated IDs or updated values immediately after performing a database modification. This eliminates the need for an additional query to retrieve the updated data.

13. What are some differences between WebSockets and HTTP?
Connection: HTTP is a stateless, one-way request-response protocol, while WebSockets create a persistent, bidirectional connection between client and server.
Use case: HTTP is best for typical request-response interactions (e.g., fetching a webpage), whereas WebSockets are used for real-time communication (e.g., chat applications, live updates).
Overhead: HTTP has more overhead because each request establishes a new connection, whereas WebSockets maintain a continuous connection after the initial handshake.
14. Did you prefer using Flask over Express? Why or why not?
I have no but each has its strengths:

Flask (Python): Simplicity, flexibility, and ease of use. It’s great for small to medium-sized applications and offers a lightweight framework with a lot of control over the components.
Express (Node.js): Offers great performance, scalability, and ecosystem (via npm). It's commonly used for building large-scale applications due to its non-blocking, asynchronous nature.
