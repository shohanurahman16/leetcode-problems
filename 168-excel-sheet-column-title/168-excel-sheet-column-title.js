/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = ""
    while(columnNumber >= 1){
        let charCode = 0
        if(columnNumber % 26 == 0){
            charCode = 26
            columnNumber = parseInt(columnNumber/26) - 1
        }
        else{
            charCode = columnNumber % 26
            columnNumber = parseInt(columnNumber/26)
        }
        result = String.fromCharCode(64 + charCode) + result
    }
    return result
};