/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let splitedString = s.split(" ")
    
    for(let i = splitedString.length - 1; i >= 0; i--){
        if(splitedString[i] != ""){
           return splitedString[i].length;
        }   
    }
};