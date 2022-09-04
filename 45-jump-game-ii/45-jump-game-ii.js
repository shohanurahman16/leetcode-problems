/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let stepCount = 0
    let leftIndex = 0
    let rightIndex = 0
    
    while(rightIndex < nums.length - 1){
        let highestJumpIndex = 0
        for(let i = leftIndex; i < rightIndex + 1; i++){
            highestJumpIndex = Math.max(highestJumpIndex, i + nums[i])
        }
        leftIndex = rightIndex + 1
        rightIndex = highestJumpIndex
        stepCount++
    }
    
    return stepCount
};