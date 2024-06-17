function mean(arr) {
    return arr.reduce((a, b) => a + b) / arr.length;
}

function median(arr) {
    arr = arr.sort((a, b) => {
        return a - b
    })

    const mid = Math.floor(arr.length / 2)

    if (arr.length % 2 === 0) {
        return mean([arr[mid], arr[mid - 1]])

    } else {
        return arr[mid]
    }
}

function mode(arr) {
    const count =  arr.reduce((acc, i) => {
        if (i in acc) {
            acc[i] += 1;
        } else {
            acc[i] = 1;
        }
        return acc
    }, {})
    return Number(Object.keys(count).reduce((accumulator, currentValue) => {
        if (count[accumulator] < count[currentValue]) {
            accumulator = currentValue
        }

        return accumulator
    }))
}



module.exports = {mode, mean, median}