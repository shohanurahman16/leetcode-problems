/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if( n == 1) return true
    let result = 3
    while(result <= n){
        if(result == n) return true
        result = result * 3
    }
    return false
};