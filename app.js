const {mode, mean, median} = require('./calc');
const {ExpressError, makeArr} = require('./utils');
const express = require('express');

app = express();

app.use(express.json());

app.get('/mean', (req, res, next) => {
    let {nums} = req.query;
    if (nums) {
        try {
            nums = makeArr(nums);
            const r = {response: {operation: 'mean', value: mean(nums)}};
            return res.json(r);
        } catch (e) {
            next(e)
        }

    } else {
        const e = new ExpressError('You must provide nums', 400);
        next(e);
    }

})

app.get('/median', (req, res, next) => {
    let {nums} = req.query;
    if (nums) {
        try {
            nums = makeArr(nums)
            const r = {response: {operation: 'median', value: median(nums)}}

            return res.json(r)
        } catch (e) {
            next(e)
        }

    } else {
        const e = new ExpressError('You must provide nums', 400);
        next(e);
    }

})

app.get('/mode', (req, res, next) => {
    let {nums} = req.query;
    if (nums) {
        try {
            nums = makeArr(nums)
            const r = {response: {operation: 'mode', value: mode(nums)}}

            return res.json(r)
        } catch (e) {
            next(e)
        }

    } else {
        const e = new ExpressError('You must provide nums', 400);
        next(e);
    }

})

app.use((err, req, res, next) => {
    let status = err.status || 500;
    let msg = err.msg;

    res.status(status).json({
        error: {msg: msg, status:status}
    })
})
app.listen(3000, () => {
    console.log('Server started on port 3000')
})