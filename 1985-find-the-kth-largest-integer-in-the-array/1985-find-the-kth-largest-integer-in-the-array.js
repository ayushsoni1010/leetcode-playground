/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) {
  let arr = nums.map((e) => BigInt(e));
  arr.sort((a, b) => (a >= b ? 1 : -1));
  return `${arr[arr.length - k]}`;
};