const {mode, mean, median, makeArr} = require('./calc');
const express = require('express');

app = express();

app.use(express.json());

app.get('/mean', (req, res) => {
    let {nums} = req.query;
    if (nums) {
        nums = makeArr(nums)
        const r = {response: {operation: 'mean', value: mean(nums)}}
        return res.json(r)
    }

})

app.get('/median', (req, res) => {
    let {nums} = req.query;
    if (nums) {
        nums = makeArr(nums)
        const r = {response: {operation: 'median', value: median(nums)}}

        return res.json(r)
    }

})

app.get('/mode', (req, res) => {
    let {nums} = req.query;
    if (nums) {
        nums = makeArr(nums)
        const r = {response: {operation: 'mode', value: mode(nums)}}

        return res.json(r)
    }

})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})