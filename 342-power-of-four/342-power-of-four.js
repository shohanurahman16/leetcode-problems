/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if( n == 1) return true
    let result = 4
    while(result <= n){
        if(result == n) return true
        result = result * 4
    }
    return false
};