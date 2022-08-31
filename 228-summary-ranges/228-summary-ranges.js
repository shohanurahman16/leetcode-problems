/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if(nums.length == 0) return []
    if(nums.length == 1) return [nums[0].toString()]
    let ranges = []
    let startingNum = nums[0]
    
    for(let i = 1; i < nums.length; i++){
        if(nums[i-1] != nums[i] - 1){
            let str = startingNum == nums[i-1] ? startingNum.toString() : startingNum+'->'+nums[i-1]
            ranges.push(str)
            startingNum = nums[i]
        }
        if(i == nums.length - 1){
            let str = startingNum == nums[i] ? startingNum.toString() : startingNum+'->'+nums[i]
            ranges.push(str)
        }
    }
    
    return ranges
};