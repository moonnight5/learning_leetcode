// const arr = [1,4,2,6,9,10]
// function kthLargest (arr,kth) {
//   let newArr = arr.sort(sortNumber)
//   return newArr[kth - 1]
// }
// function sortNumber(a,b){
//   return b - a
// }
// console.log(kthLargest(arr,2))
// ---------------------------------------------------------------------精简版 时间复杂度高
// function findKthLargest (nums,k) {
//   if (k < 0 || k > nums.length - 1) return NaN
//   return nums.sort((a,b) => b -a)[k - 1]
// }
// console.log(findKthLargest([1,4,2,6,9,10],2))
// ---------------------------------------------------------------------快排版
function findKthLargest (nums,k) {
  const arr = quickSort(nums);
  return arr[k - 1];
}
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  var left = [],
      right = [],
      baseDot = Math.round(arr.length / 2),
      base = arr.splice(baseDot,1)[0];
  for (var i = 0; i < arr.length; i ++) {   //O(N)
    if (arr[i] < base) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([base],quickSort(right))  // 递归 O(log2N)
}
console.log(findKthLargest([1,4,2,6,9,10],2))