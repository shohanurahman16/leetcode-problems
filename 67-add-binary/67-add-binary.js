/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let maxLength = Math.max(a.length, b.length)
    let carry = 0
    let output = ""
    
    for (let i = 0; i < maxLength; i++) {
        firstNumber = a[a.length - 1 - i] ? parseInt(a[a.length - 1 - i]) : 0
        secondNumber = b[b.length -1 - i] ? parseInt(b[b.length - 1 - i]) : 0
        
        console.log(firstNumber, secondNumber)
        
        let sum = firstNumber + secondNumber + carry
        if (sum == 0){
            output = "0"+output
            carry = 0
        }
        else if(sum == 1) {
            output = "1"+output
            carry = 0
        }
        else if(sum == 2) {
            output = "0"+output
            carry = 1
        }
        else {
            output = "1"+output
            carry = 1
        }
    }
    
    if(carry != 0){
        output = "1"+output
    }
    
    return output
};