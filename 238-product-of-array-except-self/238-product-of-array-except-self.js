/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output = []
    let prefix = 1;
    let postfix = 1;
    
    // calculate prefix
    for(let i = 0; i < nums.length; i++){
        let currentPrefix = prefix * (nums[i-1] != undefined ? nums[i-1] : 1)
        output.push(currentPrefix)
        prefix = currentPrefix
    }
    
    // calculate postfix and output array
    for(let i = nums.length - 1; i >= 0; i--){
        let currentPostfix = postfix * (nums[i+1] != undefined ? nums[i+1] : 1)
        output[i] = output[i] * currentPostfix
        postfix = currentPostfix
    }
    
    return output
};