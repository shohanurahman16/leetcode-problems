/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const VALUES = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const CHARS = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    let pointer = 0
    let result = ""

    while (num > 0){
        rem = num % VALUES[pointer]
        if (rem != num){
            result += CHARS[pointer]
            num -= VALUES[pointer]   
        }
        else {
            pointer += 1  
        } 
    }

    return result
};