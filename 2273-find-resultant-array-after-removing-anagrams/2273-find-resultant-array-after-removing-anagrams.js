/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    let result = [words[0]]
    
    for(let i = 0; i < words.length - 1; i++){
        let sortedWordFirst = words[i].split('').sort().join('');
        let sortedWordSecond = words[i+1].split('').sort().join('');
        if(sortedWordFirst != sortedWordSecond){
            result.push(words[i+1])
        }
    }
    
    return result
};