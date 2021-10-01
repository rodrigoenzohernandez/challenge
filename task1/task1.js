/**
 * Return the largest integer such that both values K and -K exist in array A.
 * @param {array} A
 * @return {int}
 */

 function solution(A) {

    //sort A
    A.sort(function(a,b){return b -a })

    //iterate A
    for(let i = 0; i< A.length; i++){
        //if element is positive and the array includes its opposite, return it
        if (A[i] > 0 && A.includes(A[i] * -1)) return A[i]
    }

    //return 0 if there is no int that both values K and -K exists in array A
    return 0
}

console.log(solution([3, -3, 4, 5, -5]))
console.log(solution([3]))
