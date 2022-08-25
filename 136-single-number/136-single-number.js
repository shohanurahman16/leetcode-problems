/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = []
    for(let i = 0; i < nums.length; i++){
        if(result.indexOf(nums[i]) >= 0){
            result.splice(result.indexOf(nums[i]), 1)
        }
        else{
            result.push(nums[i])
        }
    }
    
    return result[0]
};