// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

function removeSpecificElement(arr, element) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === element) {
            arr.splice(i, 1)
        }
    }
    return arr;
}
module.exports = removeSpecificElement;