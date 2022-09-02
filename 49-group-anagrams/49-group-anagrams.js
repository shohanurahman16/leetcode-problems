/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    mapofWords = {}
    
    for(let i = 0; i < strs.length; i++){
        let sortedWord = strs[i].split('').sort().join('');
        if(mapofWords[sortedWord]){
            mapofWords[sortedWord].push(strs[i])
        }
        else{
            mapofWords[sortedWord] = [strs[i]]
        }
    }
    
    let result = []
    for(const [key, value] of Object.entries(mapofWords)){
        result.push(value)
    }
    
    return result
};