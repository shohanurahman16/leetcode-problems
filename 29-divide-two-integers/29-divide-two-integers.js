/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (dividend === -Math.pow(2, 31) && divisor === -1) return Math.pow(2, 31) - 1;
    if (divisor === 1) return dividend;
    if (dividend === divisor) return 1;
    
    let result = 0
    let absulateDividend = Math.abs(dividend)
    let absulateDivisor  = Math.abs(divisor)
    
    while(absulateDividend >= absulateDivisor){
        absulateDividend = absulateDividend - absulateDivisor
        result++
    }
    
    return (dividend>0 && divisor<0) || (dividend<0 && divisor>0) ? -result : result
};