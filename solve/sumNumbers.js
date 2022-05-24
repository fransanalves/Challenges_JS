function sumTwoSmallerNumbers(arr) {
    let arrSort = arr.sort((a, b) => a - b).slice(0, 2);
    let sumNumbers = arrSort.reduce((acc, value) => {
        return acc + value
    })
    return sumNumbers;
}
module.exports = sumTwoSmallerNumbers;