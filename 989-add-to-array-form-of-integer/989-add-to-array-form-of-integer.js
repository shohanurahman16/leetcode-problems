/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    num1 = num.reverse()
    num2 = k.toString().split("").reverse()
    console.log(num1, num2)
    let result = ""
    let carry = 0
    
    let maxLength = Math.max(num1.length, num2.length);
    
    for(let i = 0; i < maxLength; i++){
        let sum = (num1[i] ? num1[i] : 0) + (num2[i] ? parseInt(num2[i]) : 0) + carry
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
    
    return result.split("")
};