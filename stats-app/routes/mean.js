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

    const mean = numArray.reduce((acc, curr) => acc + curr, 0) / numArray.length;

    res.json({ operation: "mean", value: mean });
});

module.exports = router;
