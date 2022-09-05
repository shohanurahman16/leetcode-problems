/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let result = [];
    let maxNum2 = Math.max(...nums2);
    
    for(let i = 0 ; i < nums1.length; i++){
        if(nums1[i] == maxNum2){
            result.push(-1);
        }
        else{
            let index = nums2.indexOf(nums1[i]);
            while(index<nums2.length){
                if(nums2[index+1]>nums1[i]){
                    result.push(nums2[index+1]);
                    break;
                }
                index++
            }
            if(index == nums2.length){
                result.push(-1);
            }
        }
    } 
    return result
};