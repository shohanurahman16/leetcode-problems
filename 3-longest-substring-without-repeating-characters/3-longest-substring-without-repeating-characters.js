/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let localMax = 0;
    let subStr = []
    let i = 0
    
    while(i < s.length){
        if(subStr.indexOf(s[i]) >= 0){
            // s = s.substring(subStr.indexOf(s[i]) + 1)
            i = i - localMax + 1
            subStr = []
            localMax = 0
        }
        else{
            subStr.push(s[i])
            i++
            localMax++
        }
        
        if(localMax > maxLength){
            maxLength = localMax
        }
    }
    
    return maxLength;
};