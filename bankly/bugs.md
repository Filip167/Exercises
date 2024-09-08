** Document your bugs here **


Bugs or Issues Identified:
1. Middleware in auth.js:

In the authUser function, a token is checked in req.body._token or req.query._token. However, tokens are typically passed in the Authorization header, so this might not catch tokens sent through headers. It is suggested to update the logic to check the headers:
js

const token = req.body._token || req.query._token || req.headers.authorization?.split(' ')[1];


2. Route Error in /users/:username (PATCH route):

In the PATCH route, both requireLogin and requireAdmin middleware are being used. This means it checks for both login and admin status, but based on the logic, either the user or an admin is allowed to edit. It may be beneficial to separate these two conditions to ensure that non-admin users can edit their own data without needing admin access.

3. Error in User.get() Method:

In the get method of the User model, an error is thrown with new ExpressError('No such user', 404);, but it is not returned. This can cause an issue where the error is created but not thrown, leading to no actual error being raised in some cases. It should be:
js

if (!user) {
  throw new ExpressError('No such user', 404);
}

4. Error in User.delete() Method:

In the delete method, a throw for ExpressError is missing. It should be:
js

if (!user) {
  throw new ExpressError('No such user', 404);
}

5. Issue in auth.js Login Route:

In the POST /login route, the User.authenticate call is not being awaited, which may cause issues when the function attempts to resolve. It should be:
js

let user = await User.authenticate(username, password);