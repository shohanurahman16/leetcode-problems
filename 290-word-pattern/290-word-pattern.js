/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let mappingObjofPattern = {}
    s = s.split(" ")
    for(let i = 0; i < pattern.length; i++){
        if((mappingObjofPattern[pattern[i]] && mappingObjofPattern[pattern[i]] != s[i])){
            return false
        }
        if(s[i]){
            mappingObjofPattern[pattern[i]] = s[i]
        }
        else{
            return false
        }
    }
    
    console.log(mappingObjofPattern)
    
    let mappingObjofs = {}
    for(let i = 0; i < s.length; i++){
        if((mappingObjofs[s[i]] && mappingObjofs[s[i]] != pattern[i])){
            return false
        }
        mappingObjofs[s[i]] = pattern[i]
    }
    
    console.log(mappingObjofs)
    
    return true
};