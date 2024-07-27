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
    });

    const frequency = {};
    numArray.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
    });

    let mode = [];
    let maxCount = 0;

    for (let num in frequency) {
        if (frequency[num] > maxCount) {
            mode = [parseFloat(num)];
            maxCount = frequency[num];
        } else if (frequency[num] === maxCount) {
            mode.push(parseFloat(num));
        }
    }

    res.json({ operation: "mode", value: mode });
});

module.exports = router;
