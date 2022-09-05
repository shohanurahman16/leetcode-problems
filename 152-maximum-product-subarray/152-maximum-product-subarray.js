/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let dpMax = []
    let dpMin = []
    let result = nums[0]
    dpMax[0] = nums[0]
    dpMin[0] = nums[0]
    
    for(let i = 1; i < nums.length; i++){
        dpMax[i] = Math.max(dpMax[i-1] * nums[i], dpMin[i-1] * nums[i], nums[i])
        dpMin[i] = Math.min(dpMin[i-1] * nums[i], dpMax[i-1] * nums[i], nums[i])
        
        result = Math.max(result, dpMax[i])
    }
    
    return result
};