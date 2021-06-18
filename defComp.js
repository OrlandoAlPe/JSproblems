/**
 * Definir complejidad de algoritmo de suma de valores en un arreglo
 * 
 */


var nums = [3, 12, 34, 6, 3, 1, 4]
//Solucion 1
function sumArr(arr) {
    cont = 0
    arr.forEach(e => {
        cont += e
    });
}

/**
 * Definiendo pasos segun valor de n
 * n=1 n=3 n=10
 * 1    1   1
 * 1    1   1
 * 1    3   10
 * 
 * T = 1+1+n
 * T = 2 + 1*n
 * T = 1*n
 * T = n
 * 
 * Este algoritmo es O(n) por lo tanto su complejidad es lineal.
 * 
 * |  /
 * | /
 * |/___
 * 
 */

