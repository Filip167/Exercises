const express = require('express');
const router = express.Router();

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
    }).sort((a, b) => a - b);

    let median;
    const mid = Math.floor(numArray.length / 2);

    if (numArray.length % 2 === 0) {
        median = (numArray[mid - 1] + numArray[mid]) / 2;
    } else {
        median = numArray[mid];
    }

    res.json({ operation: "median", value: median });
});

module.exports = router;
