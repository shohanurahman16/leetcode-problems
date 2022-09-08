/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
    while(s.length > k){
        let newStr = ""
        let counter = 0
        let tempSum = 0
        for(let i=0; i<s.length; i++){
            tempSum += parseInt(s[i])
            counter++
            if(counter == k || i == s.length - 1){
                newStr += tempSum;
                counter = 0
                tempSum = 0
            }
        }
        
        s = newStr
    }
    return s
};