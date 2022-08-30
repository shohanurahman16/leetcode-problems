/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    num1 = num1.split("").reverse()
    num2 = num2.split("").reverse()
    let result = ""
    let carry = 0
    
    let maxLength = Math.max(num1.length, num2.length);
    
    for(let i = 0; i < maxLength; i++){
        let sum = (num1[i] ? parseInt(num1[i]) : 0) + (num2[i] ? parseInt(num2[i]) : 0) + carry
        result = sum % 10 + result
        if(sum > 9){
            carry = 1
        }
        else{
            
            carry = 0
        }
    }
    
    if(carry > 0){
        result = carry + result
    }
    
    return result
};