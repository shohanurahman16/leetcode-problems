/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    numStr = num.toString()
    while(numStr.length > 1){
        tempSum = 0
        for(let i=0; i<numStr.length; i++){
            tempSum += parseInt(numStr[i])
        }
        numStr = tempSum.toString()
    }
    
    return parseInt(numStr)
};