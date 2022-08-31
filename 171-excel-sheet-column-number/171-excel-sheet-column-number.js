/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0;
    for(let i = 0; i < columnTitle.length; i++){
        const power = columnTitle.length - 1 - i
        result = result + (columnTitle.charCodeAt(i) - 64) * (26 ** power)
    }
    return result
};