/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majorElement = nums[0]
    let majorCount = 1
    let countPerNumber = {}
    for(let i=0; i<nums.length; i++){
        if(countPerNumber[nums[i]] != null){
            countPerNumber[nums[i]] = countPerNumber[nums[i]] + 1
        }
        else{
            countPerNumber[nums[i]] = 1   
        }
        
        if(countPerNumber[nums[i]] > majorCount){
            majorCount = countPerNumber[nums[i]]
            majorElement = nums[i]
        }
    }
    return majorElement
};