const express = require('express');
let axios = require('axios');
var app = express();

// Middleware to parse JSON request body
app.use(express.json());

app.post('/', async function(req, res, next) {
  try {
    // Fetch data from GitHub for each developer in parallel
    let results = await Promise.all(req.body.developers.map(async d => {
      return await axios.get(`https://api.github.com/users/${d}`);
    }));

    // Map results to desired format
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

    // Send the result as JSON
    return res.json(out);
  } catch (err) {
    next(err);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
