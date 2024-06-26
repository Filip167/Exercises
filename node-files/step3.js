const fs = require('fs');
const axios = require('axios');

function cat(path, writeTo, isLast) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading ${path}:\n  ${err}`);
            process.exit(1);
        } else {
            handleOutput(data, writeTo, isLast);
        }
    });
}

async function webCat(url, writeTo, isLast) {
    try {
        const res = await axios.get(url);
        handleOutput(res.data, writeTo, isLast);
    } catch (err) {
        console.error(`Error fetching ${url}:\n  ${err}`);
        process.exit(1);
    }
}

function handleOutput(data, writeTo, isLast) {
    if (writeTo) {
        fs.appendFile(writeTo, data + (isLast ? '' : '\n'), 'utf8', (err) => {
            if (err) {
                console.error(`Couldn't write ${writeTo}:\n  ${err}`);
                process.exit(1);
            }
        });
    } else {
        console.log(data);
    }
}

const args = process.argv.slice(2);
let writeTo;

if (args[0] === '--out') {
    writeTo = args[1];
    args.splice(0, 2);
}

const inputs = args;
inputs.forEach((arg, index) => {
    const isLast = index === inputs.length - 1;
    if (arg.startsWith('http://') || arg.startsWith('https://')) {
        webCat(arg, writeTo, isLast);
    } else {
        cat(arg, writeTo, isLast);
    }
});
