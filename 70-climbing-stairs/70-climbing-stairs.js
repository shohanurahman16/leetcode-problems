/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n == 1 || n == 2 || n==3){
        return n
    }
    a = 2;
    b = 3;
    for(let i = 4; i < n; i++){
        b = a + b
        a = b - a;
    }
    return a + b;
};