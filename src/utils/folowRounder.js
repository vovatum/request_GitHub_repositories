export const followRounder = (num) => {
    let numToArr = num.toString().split('')
    if (numToArr.length > 9) {
        return 'billion+'
    } else if (numToArr.length > 6) {
        if (numToArr.slice(numToArr.length - 6, numToArr.length - 5).toString() === '0') {
            return numToArr.slice(0, numToArr.length - 6).join('') + 'm'
        } else {
            return numToArr.slice(0, numToArr.length - 6).join('') + '.'
                + numToArr.slice(numToArr.length - 6, numToArr.length - 5) + 'm'
        }
    } else if (numToArr.length > 3) {
        if (numToArr.slice(numToArr.length - 3, numToArr.length - 2).toString() === '0') {
            return numToArr.slice(0, numToArr.length - 3).join('') + 'k'
        } else {
            return numToArr.slice(0, numToArr.length - 3).join('') + '.'
                + numToArr.slice(numToArr.length - 3, numToArr.length - 2) + 'k'
        }
    } else {
        return num.toString()
    }
}