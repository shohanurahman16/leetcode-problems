/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    const totalSum = getSum(arr)
    if(totalSum % 3 == 0){
        let partCount = 0
        let tempSum = 0
        let targetSum = totalSum / 3
        for(let i = 0; i < arr.length; i++){
            tempSum += arr[i]
            if(tempSum == targetSum){
                tempSum = 0
                partCount++
                console.log({tempSum, targetSum, partCount})
            }
            if(partCount == 3){
                return true
            }
        }
    }
    return false
};

var getSum = function(arrayOfNums) {
    return arrayOfNums.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
} 