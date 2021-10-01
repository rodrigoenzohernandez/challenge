/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */

 function solution(S, T) {

    //NOTHING
    if(S == T) return 'NOTHING'

    //ADD

    //quit last character to T
    let slicedT = T.slice(0,-1)
    //If S and T with the last character are equal, return ADD and the last character
    if(S == slicedT) return "ADD " + T.slice(-1)

    //SWAP

    //order S and T
    let orderedS = S.split("").sort().join("")
    let orderedT = T.split("").sort().join("")

    if(orderedS == orderedT) {
        arrayS = S.split("")
        arrayT = T.split("")

        for(let i = 0; i< arrayS.length; i++){
            //find characters that need to be swapped
            if(arrayS[i] !== arrayT[i]) return "SWAP " + arrayS[i] + " " + arrayT[i]
        }

    }

    //JOIN

    if(S.length == T.length +1){

        //find duplicated character into S
        let occurencyCounter = 0
        arrayS = S.split("")

        for(let i = 0; i< arrayS.length; i++){
            //return the duplicated character in the join
            if(arrayS.indexOf(arrayS[i]) != arrayS.lastIndexOf(arrayS[i])) return "JOIN " + arrayS[i] 
        }
        
    }

    //IMPOSSIBLE
    return 'IMPOSSIBLE'
}

console.log(solution('meet', 'met'))