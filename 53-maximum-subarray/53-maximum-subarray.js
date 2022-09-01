/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0]
    let localMax = nums[0]
    for(let i = 1; i < nums.length; i++){
        if(localMax + nums[i] > nums[i]){
            localMax = localMax + nums[i]
        }
        else{
            localMax = nums[i]
        }
        
        if(localMax > maxSum){
            maxSum = localMax
        }
    }
    return maxSum
};