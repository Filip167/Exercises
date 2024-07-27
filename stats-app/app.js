const express = require('express');
const app = express();

const meanRoute = require('./routes/mean');
const medianRoute = require('./routes/median');
const modeRoute = require('./routes/mode');
const allRoute = require('./routes/all');

app.use('/mean', meanRoute);
app.use('/median', medianRoute);
app.use('/mode', modeRoute);
app.use('/all', allRoute);

app.use((err, req, res, next) => {
    if (err) {
        res.status(err.status || 500).json({ error: err.message });
    } else {
        next();
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;
