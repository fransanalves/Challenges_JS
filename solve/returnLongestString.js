// Write a function that takes an array of strings as argument
// Return the longest string

function returnTheLongestString(arr) {
    let longestStr = '';
    for(let i = 0; i < arr.length; i++) {
        let strLength = arr[i];
        if(strLength.length > longestStr.length) {
            longestStr = strLength;
        }
    }
    return longestStr;
}
module.exports = returnTheLongestString;