class ExpressError extends Error {
    constructor(msg, status) {
        super();
        this.msg = msg;
        this.status = status;

        console.error(this.stack)
    }
}

function makeArr(str) {
    if (!str.includes(',')) {
        throw new ExpressError('Nums must be a comma seperated list of numbers', 400)
    }
    let arr = str.split(',');

    return arr.map((n) => {
        const num = Number(n)
        if (isNaN(num)) {
            throw new ExpressError(`${n} is not a number`, 400)
        }
        return Number(n)
    })
}

module.exports = {ExpressError, makeArr}