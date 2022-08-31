/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let mappingOfS = {}
    for(let i = 0; i < s.length; i++){
        if(mappingOfS.hasOwnProperty(s[i])){
            mappingOfS[s[i]]++
        }
        else{
            mappingOfS[s[i]] = 1
        }
    }
    
    for(let i = 0; i < t.length; i++){
        if(mappingOfS.hasOwnProperty(t[i])){
            mappingOfS[t[i]]--
            if(mappingOfS[t[i]] == 0){
                delete mappingOfS[t[i]]
            }
        }
        else{
            return false
        }
    }
    return Object.keys(mappingOfS).length == 0 ? true : false
};