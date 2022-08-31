/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let sumOfSquares = []
    while(n != 1){
        sumOfSquare = 0;
        n = n.toString().split("")
        for(let i=0; i < n.length; i++){
            sumOfSquare += (parseInt(n[i]) * parseInt(n[i]))
        }
        if(sumOfSquares.includes(sumOfSquare)){
            return false
        }
        sumOfSquares.push(sumOfSquare)
        n = sumOfSquare
    }
    return true;
};