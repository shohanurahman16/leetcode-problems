/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let original = num
    
    let tempReverse = 0
    
    while(num > 0){
        tempReverse = tempReverse * 10 + num % 10
        num = parseInt(num / 10)
    }
    
    let reverseOfTemp = 0
    
    while(tempReverse > 0){
        reverseOfTemp = reverseOfTemp * 10 + tempReverse % 10
        tempReverse = parseInt(tempReverse / 10)
    }
    
    return reverseOfTemp == original
};