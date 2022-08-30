/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mappingObjofS = {}
    let mappingObjofT = {}
    for(let i = 0; i < s.length; i++){
        if((mappingObjofS[s[i]] && mappingObjofS[s[i]] != t[i]) || mappingObjofT[t[i]] && mappingObjofT[t[i]] != s[i]){
            return false
        }
        mappingObjofS[s[i]] = t[i]
        mappingObjofT[t[i]] = s[i]
    }
    return true
};