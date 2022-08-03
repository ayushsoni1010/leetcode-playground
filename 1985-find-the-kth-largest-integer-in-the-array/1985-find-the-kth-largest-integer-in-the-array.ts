function kthLargestNumber(nums: string[], k: number): string {
  let arr = nums.map((e) => BigInt(e));
  arr.sort((a, b) => (a >= b ? 1 : -1));
  return `${arr[arr.length - k]}`;
};