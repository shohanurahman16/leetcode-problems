/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    leftIndex = -1
    rightIndex = -1
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == target){
            if (leftIndex == -1 && rightIndex == -1){
                leftIndex = i
                rightIndex = i
            }
            else if(leftIndex == -1){
                   leftIndex == i 
            }
            else{
                rightIndex = i
            }
        }
    }
    
    return [leftIndex, rightIndex]
};