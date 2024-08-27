const express = require("express");
const app = express();
const companiesRoutes = require("./routes/companies");
const invoicesRoutes = require("./routes/invoices");


app.use(express.json()); 
app.use("/companies", companiesRoutes); 

// 404 handler for undefined routes
app.use(function(req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// General error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  return res.json({
    error: {
      message: err.message,
      status: err.status || 500
    },
  });
});

module.exports = app;
