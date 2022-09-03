/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n === 0){
        return 1
    }
        
    let power = Math.abs(n);

    let result = power%2===0 ? myPow(x*x, power/2) : myPow(x*x, (power-1)/2) * x;

    return n < 0 ? 1/result : result;
};