/** Application for bank.ly */

const express = require('express');
const app = express();
const ExpressError = require("./helpers/expressError");
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');


// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

/** 404 handler */
app.use(function(req, res, next) {
  const err = new ExpressError("Not Found", 404);

  // Pass the error to the next middleware
  return next(err);
});

/** General error handler */
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message || "Internal Server Error",
  });
});

// Exporting the app for use in tests or server.js
module.exports = app;
