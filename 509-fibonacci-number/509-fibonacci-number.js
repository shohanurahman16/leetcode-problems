/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n < 2){
        return n
    }
    let a = 0;
    let b = 1;
    sum = a + b
    for(let i = 2; i < n; i++){
        b = a + b
        a = b - a
        sum = a + b
    }
    return sum;
};