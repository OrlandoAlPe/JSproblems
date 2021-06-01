/**
 * Write a function called oddball_sum which takes in a list of numbers 
 * and returns the sum of all the odd elements. 
 * Try to solve with and without reduce function.
 * 
 */

function oddball_sum(list) {
    let sum = 0
    list.forEach(e => {
        if (e % 2 != 0) {
           sum = sum + e
        }
    });

    console.log(sum);
}

oddball_sum(
    [1, 2, 3, 4, 5, 23, 235, 325, 34, 5, 21, 2343, 3465, , 123, 4, 12, 10, 6, 76, 6, 73, 314]
)