/**
 * Given a string s, determine if it is a palindrome, 
 * considering only alphanumeric characters and ignoring cases.
 * 
 * rules:
 * Do not use the reverse() method
 * 
 */


function changedWord(word) {
    var newWord = ''
    for (let i = 0;i < word.length;i++) {
        if (word[i] != ' ') {
            newWord = newWord + word[i].toLowerCase()
        }
    }
    return newWord
}

function reversedWord(word) {
    var newWord = ''
    for (let i = (word.length - 1);i >= 0;i--) {
        newWord = newWord + word[i]
    }
    newWord = changedWord(newWord)
    return newWord
}


function palindrome(word) {
    if (changedWord(word) == reversedWord(word)) {
        console.log("It's palindrome");
    } else {
        console.log("It's not palindrome");
    }
}

palindrome('oso')