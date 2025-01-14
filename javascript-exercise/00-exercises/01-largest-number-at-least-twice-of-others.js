// Largest Number At Least Twice of Others
// You are given an integer array nums where the largest integer is unique.
// Determine whether the largest element in the array is at least twice as much as every other number in the array.
// If it is, return the index of the largest element, or return -1 otherwise.
// Example 1:
// Input: nums = [3,6,1,0]
// Output: 1
// Explanation: 6 is the largest integer and for every other number in the array x,
// 6 is more than twice as big as x.
// The index of value 6 is 1, so we return 1.
// Example 2:
// Input: nums = [1,2,3,4]
// Output: -1
// Explanation: 4 is less than twice the value of 3, so we return -1.
// Example 3:
// Input: nums = [1]
// Output: 0
// Explanation: 1 is trivially at least twice the value as any other number because there are no other numbers.

var dominantIndex = function(nums) {
    let max = Math.max(...nums);
    let index = nums.indexOf(max);
    for (let i = 0; i < nums.length; i++) {
        if (i !== index && max < nums[i] * 2) {
            return -1;
        }
    }
    return index;
}

console.log(dominantIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 30]));
// console.log(dominantIndex([3,6,1,0]));

