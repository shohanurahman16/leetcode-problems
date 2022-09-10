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

// isn't it better than O(n*2) ?
const getresult = (numbers, target) => { 
    for (i = 0; i < numbers.length; i++) {
        let n2 = target - numbers[i];
        let index2 = numbers.indexOf(n2);
        if (index2 != -1 && n2 + numbers[i] == target) {
            let result = [
                numbers.indexOf(numbers[i]),
                numbers.indexOf(n2),
            ];
            console.log(result);
            return result;
        }
    }
}
