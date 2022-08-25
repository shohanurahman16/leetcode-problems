/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    if(strs.length == 1 || strs[0] == "") {
        return strs[0];
    }
    
    strs.sort();
    
    let i = 0;
    
    let maxLength = Math.min(strs[0].length, strs[strs.length -1].length)

    while(i < maxLength && strs[0][i] === strs[strs.length - 1][i]){
        i++;
    }
    
    return strs[0].substr(0,i);
};
    

