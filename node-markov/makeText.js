const fs = require('fs');
const axios = require('axios');
const { MarkovMachine } = require('./markov');

function generateText(text) {
  let mm = new MarkovMachine(text);
  console.log(mm.makeText());
}

async function makeText(pathType, path) {
  if (pathType === 'file') {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        console.error(`Cannot read file: ${path}: ${err}`);
        process.exit(1);
      }
      generateText(data);
    });
  } else if (pathType === 'url') {
    try {
      let res = await axios.get(path);
      generateText(res.data);
    } catch (err) {
      console.error(`Cannot read URL: ${path}: ${err}`);
      process.exit(1);
    }
  } else {
    console.error(`Unknown path type: ${pathType}`);
    process.exit(1);
  }
}

let [pathType, path] = process.argv.slice(2);
makeText(pathType, path);
