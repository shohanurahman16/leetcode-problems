/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let visitedNumbersIndex = {}
    for(let i = 0; i < nums.length; i++){
        if(visitedNumbersIndex.hasOwnProperty([nums[i]])){
            if(i - visitedNumbersIndex[nums[i]] <= k){
                return true
            }
        }
        visitedNumbersIndex[nums[i]] = i
    }
    return false
};