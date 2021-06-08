/*
For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG
*/


function reverseStr(word) {
    var sentence = new String(word)
    var newarr = []
    sentence = sentence.split(' ')
    for (let i = 0;i < sentence.length;i++) {
        newarr.push(sentence[i].split('').reverse().join(''))
    }
    console.log(newarr.join(' '));
}


reverseStr('Welcome to this Javascript Guide!')