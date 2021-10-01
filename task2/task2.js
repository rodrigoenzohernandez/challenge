/**
 * 
 * @param {int} A
 * @param {int} B
 * @return {int}
 */

 function solution(A, B) {

    let result = 0
    
    // if A is odd increment in one
    if(A%2 != 0) A++

    // iterate the range of even numbers between A and B
    for(let i = A; i <= B; i = i+2){
        if(isPronic(i)) result ++
    }

    return result
}


/**
 * validate if a number can be expressed as the product of two consecutive integers
 * @param {int} n
 * @return {boolean}
 */

function isPronic(n){
    let X = Math.floor(Math.sqrt(n))
    let result = X * (X + 1)
    return (result == n) 
}