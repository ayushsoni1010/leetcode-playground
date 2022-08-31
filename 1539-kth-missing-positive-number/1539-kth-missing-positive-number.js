/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let i = 1;
    const res = [];
    while(res.length <= k){
        if(!arr.includes(i)){
            res.push(i);
        }
        i++;
    }
    return res[k-1];
};