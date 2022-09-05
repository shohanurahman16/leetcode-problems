/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let newX = Math.abs(x)
    let result = 0
    
    while(newX > 0){
        result = result * 10 + newX % 10
        newX = parseInt(newX / 10)
    }
    
    if (result < Math.pow(-2, 31) || result > (Math.pow(2, 31) - 1)) return 0
    return x < 0 ? -result : result
};