/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let counter = 0
    for(let i = num; i > 0; i--) {
        let sum = i
            .toString()
            .split('')
            .map(Number)
            .reduce(function (a, b) {
                return a + b;
            }, 0)
        if(sum % 2 == 0) {
            counter++
        }
    }
    return counter
};