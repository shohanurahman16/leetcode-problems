/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let start = 1
    let end   = n
    let mid = parseInt((start+end)/2)
    
    while(start <= end){
        if (guess(mid) == 0 ){
            return mid
        }
        else if(guess(mid) == 1){
            start = mid + 1
        }
        else{
            end = mid - 1
        }
        
        mid = parseInt((start+end)/2)
    }
};