/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp = []
    prev = 0
    current = 0
    
    for(let i=0; i<nums.length; i++){
        let temp = Math.max(prev+nums[i], current)
        prev = current
        current = temp
    }
    
    return current
};
