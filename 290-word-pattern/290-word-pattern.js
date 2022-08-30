/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let mappingObjofPattern = {}
    let mappingObjofs = {}
    s = s.split(" ")
    
    if (s.length != pattern.length) return false
        
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
        
        if((mappingObjofs[s[i]] && mappingObjofs[s[i]] != pattern[i])){
            return false
        }
        mappingObjofs[s[i]] = pattern[i]
    }
    
    return true
};