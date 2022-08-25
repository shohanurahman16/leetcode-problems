/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numberOfitems = nums.length;
    
    for(i=0; i < numberOfitems; i++){
        for(j = i + 1; j < numberOfitems; j++){
            if(nums[i] + nums[j] == target){
                return [i,j];
            }
        }
    }
};