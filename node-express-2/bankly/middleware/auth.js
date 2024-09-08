const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

/** Middleware for requiring a user to be logged in. */
function requireLogin(req, res, next) {
  try {
    if (req.curr_username) {
      return next();
    } else {
      return next({ status: 401, message: 'Unauthorized' });
    }
  } catch (err) {
    return next(err);
  }
}

/** Middleware for requiring an admin user. */
function requireAdmin(req, res, next) {
  try {
    if (req.curr_admin) {
      return next();
    } else {
      return next({ status: 401, message: 'Unauthorized' });
    }
  } catch (err) {
    return next(err);
  }
}

/** Authentication Middleware: Decodes JWT and attaches username and admin status to request. */
function authUser(req, res, next) {
  try {
    const token = req.body._token || req.query._token || (req.headers.authorization && req.headers.authorization.split(" ")[1]);
    
    if (token) {
      const payload = jwt.verify(token, SECRET_KEY);
      req.curr_username = payload.username;
      req.curr_admin = payload.admin;
    }
    return next();
  } catch (err) {
    return next({ status: 401, message: "Unauthorized" });
  }
}

module.exports = {
  requireLogin,
  requireAdmin,
  authUser
};
