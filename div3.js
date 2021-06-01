/**
 * 
 * You will be given 2 parameters: a low and high number. 
 * Your goal is to print all numbers between low and high, 
 * and for each of these numbers print whether or not the number is divisible by 3. 
 * If the number is divisible by 3, print the word "div3" directly after the number.
 */

function div3(mayor, menor) {
    for (i = menor;i <= mayor;i++) {
        if (i%3 == 0) {
            console.log(i + ' div3 ');
        } else{
            console.log(i + ' ');
        }
    }
}


const n1 = 10
const n2 = 50

if (n1 > n2) {
    div3(n1, n2)
} else {
    div3(n2, n1)
}