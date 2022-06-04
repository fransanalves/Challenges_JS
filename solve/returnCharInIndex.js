// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
function returnCharInIndex(str, index) {
    const strNoSpace = str.replace(/\s/g, '')
    for(let i = 0; i < strNoSpace.length; i++) {
        let addOne = i + 1;
        if(addOne === index) {
            return strNoSpace[i];
        }
    }
}
module.exports = returnCharInIndex;