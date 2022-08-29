/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    const totalSum = getSum(nums)
    let leftSum = 0;
    for(let i = 0; i < nums.length; i++){
        let rightSum = totalSum - leftSum - nums[i]
        if(leftSum == rightSum){
            return i;
        }
        leftSum = leftSum + nums[i];
    }
    return -1
};

var getSum = function(arrayOfNums) {
    return arrayOfNums.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
} 