const axios = require('axios')

describe('MEAN ROUTE', () => {
    test('mean should return the mean of an array', async () => {
        const res = await axios.get('http://127.0.0.1:3000/mean', {params: {nums: '1, 2, 3, 4, 5'}})

        expect(res.data).toEqual({ response: { operation: 'mean', value: 3 } }
        )
    })

    test('array must be provided', async () => {
        try {
            const res = await axios.get('http://127.0.0.1:3000/mean')
        } catch (e) {
            expect(e.response.data).toEqual({ error: { msg: 'You must provide nums', status: 400 }})
        }
    })

    test('array should be comma separated', async () => {
        try {
            const res = await axios.get('http://127.0.0.1:3000/mean', {params: {nums: '12345'}})
        } catch (e) {
            expect(e.response.data).toEqual({ error: { msg: 'Nums must be a comma seperated list of numbers', status: 400 }})
        }
    })

    test('array can only contain numbers', async () => {
        try {
            const res = await axios.get('http://127.0.0.1:3000/mean', {params: {nums: '1, 2, 3, 4, five, 6'}})
        } catch (e) {
            expect(e.response.data).toEqual({ error: { msg: ' five is not a number', status: 400 }})
        }
    })
});

describe('MEDIAN ROUTE', () => {
    test('median should return the median of an array', async () => {
        const res = await axios.get('http://127.0.0.1:3000/median', {params: {nums: '1, 2, 3, 4, 5, 6, 7, 8, 9'}})

        expect(res.data).toEqual({ response: { operation: 'median', value: 5 } }
        )
    })

    test('median should work on even length array', async () => {
        const res = await axios.get('http://127.0.0.1:3000/median', {params: {nums: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10'}})

        expect(res.data).toEqual({ response: { operation: 'median', value: 5.5 } }
        )
    })

    test('array must be provided', async () => {
        try {
            const res = await axios.get('http://127.0.0.1:3000/median')
        } catch (e) {
            expect(e.response.data).toEqual({ error: { msg: 'You must provide nums', status: 400 }})
        }
    })

    test('array should be comma separated', async () => {
        try {
            const res = await axios.get('http://127.0.0.1:3000/median', {params: {nums: '12345'}})
        } catch (e) {
            expect(e.response.data).toEqual({ error: { msg: 'Nums must be a comma seperated list of numbers', status: 400 }})
        }
    })

    test('array can only contain numbers', async () => {
        try {
            const res = await axios.get('http://127.0.0.1:3000/mean', {params: {nums: '1, 2, 3, 4, five, 6'}})
        } catch (e) {
            expect(e.response.data).toEqual({ error: { msg: ' five is not a number', status: 400 }})
        }
    })
});

describe('MODE ROUTE', () => {
    test('mode should return the most frequent number in an array', async () => {
        const res = await axios.get('http://127.0.0.1:3000/mode', {params: {nums: '1, 2, 3, 4, 5, 6, 6, 6, 7, 8, 9'}})

        expect(res.data).toEqual({ response: { operation: 'mode', value: 6 } }
        )
    })

    test('array must be provided', async () => {
        try {
            const res = await axios.get('http://127.0.0.1:3000/mode')
        } catch (e) {
            expect(e.response.data).toEqual({ error: { msg: 'You must provide nums', status: 400 }})
        }
    })

    test('array should be comma separated', async () => {
        try {
            const res = await axios.get('http://127.0.0.1:3000/mode', {params: {nums: '12345'}})
        } catch (e) {
            expect(e.response.data).toEqual({ error: { msg: 'Nums must be a comma seperated list of numbers', status: 400 }})
        }
    })

    test('array can only contain numbers', async () => {
        try {
            const res = await axios.get('http://127.0.0.1:3000/mode', {params: {nums: '1, 2, 3, 4, five, 6'}})
        } catch (e) {
            expect(e.response.data).toEqual({ error: { msg: ' five is not a number', status: 400 }})
        }
    })
});