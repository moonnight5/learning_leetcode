// 快排，
// 抽象  a b(女神) c 一次
// [8,2,5(女神),9,7]
// 递归

function quickSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }
  var left = [];
  var right = [];
  // 找到中间值
  const baseDot = Math.round(arr.length / 2);
  const base = arr.splice(baseDot,1)[0];
  // const base = arr.splice(0,1)[0];
  for (var i = 0; i < arr.length; i ++) {
    if (arr[i] < base) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // left a
  // base 中间值
  // right b
  return quickSort(left).concat([base],quickSort(right))
}

const arr = [8,2,5,9,7,34,34,21,64,67,3,56,3,88]
console.log(quickSort(arr));