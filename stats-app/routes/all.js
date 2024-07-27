const express = require('express');
const fs = require('fs');
const router = express.Router();

const calculateMean = (numArray) => {
    return numArray.reduce((acc, curr) => acc + curr, 0) / numArray.length;
};

const calculateMedian = (numArray) => {
    const sortedArray = numArray.sort((a, b) => a - b);
    const mid = Math.floor(sortedArray.length / 2);

    if (sortedArray.length % 2 === 0) {
        return (sortedArray[mid - 1] + sortedArray[mid]) / 2;
    } else {
        return sortedArray[mid];
    }
};

const calculateMode = (numArray) => {
    const frequency = {};
    numArray.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
    });

    let mode = numArray[0];
    let maxCount = 1;

    for (let num in frequency) {
        if (frequency[num] > maxCount) {
            mode = parseFloat(num);
            maxCount = frequency[num];
        }
    }
    return mode;
};

router.get('/', (req, res, next) => {
    const nums = req.query.nums;
    if (!nums) {
        const err = new Error('nums are required.');
        err.status = 400;
        return next(err);
    }

    const numArray = nums.split(',').map(num => {
        if (isNaN(num)) {
            const err = new Error(`${num} is not a number.`);
            err.status = 400;
            return next(err);
        }
        return parseFloat(num);
    });

    const mean = calculateMean(numArray);
    const median = calculateMedian(numArray);
    const mode = calculateMode(numArray);

    const response = {
        operation: "all",
        mean,
        median,
        mode
    };

    if (req.query.save === 'true') {
        const timestamp = new Date().toISOString();
        const data = { ...response, timestamp };
        fs.writeFileSync('results.json', JSON.stringify(data, null, 2));
    }

    const acceptHeader = req.headers.accept;

    if (acceptHeader && acceptHeader.includes('text/html')) {
        res.send(`
            <html>
                <body>
                    <p>Operation: ${response.operation}</p>
                    <p>Mean: ${response.mean}</p>
                    <p>Median: ${response.median}</p>
                    <p>Mode: ${response.mode}</p>
                </body>
            </html>
        `);
    } else {
        res.json(response);
    }
});

module.exports = router;
