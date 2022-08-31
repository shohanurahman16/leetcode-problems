/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let numberCounter = {}
    for(let i=0; i < nums.length; i++){
        if(numberCounter[nums[i]]){
            return true
        }
        numberCounter[nums[i]] = true
    }
    return false
};