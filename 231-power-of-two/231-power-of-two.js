/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if( n == 1) return true
    let result = 2
    while(result <= n){
        if(result == n) return true
        result = result * 2
    }
    return false
};