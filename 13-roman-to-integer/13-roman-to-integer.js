/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romans = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }
    
    let result = 0;
    let stringLength = s.length;
    
    for(let i = 0; i < stringLength; i++){
        if(i == stringLength - 1 || romans[s[i]] >= romans [s[i+1]]){
            result += romans[s[i]];
        }
        else{
            result -= romans[s[i]];
        }
    }
    return result;
};