// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
function returnTheAverageOfTheNumbers(arr) {
    const result = arr.reduce((total, currentValue) => {
        return total + currentValue;
    }, 0);
    const averageNumbers = result / arr.length;
    return averageNumbers;
}
module.exports = returnTheAverageOfTheNumbers;