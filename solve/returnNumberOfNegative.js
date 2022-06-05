// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

function returnNumberOfNegative(arr) {
    let countNumberNegative = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            countNumberNegative++
        }
    }
    return countNumberNegative;
}
module.exports = returnNumberOfNegative;