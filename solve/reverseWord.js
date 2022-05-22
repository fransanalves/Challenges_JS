function reverseWords(word) {
    let phrase = word.split(" ")

    for(let i = 0; i < phrase.length; i++) {
        let currentWord = phrase[i];
       
        if(currentWord.length > 4) {
            phrase[i] = currentWord.replace(/[a-z]+/gi, (str) => {
                return str.split("").reverse().join("") 
            });
        }
    }
    return phrase.join(" ");
}
module.exports = reverseWords;