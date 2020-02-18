/**
 * 归并排序
 * @param { Array } arr 
 * 时间复杂度：O(N*log(N))
 * 空间复杂度：O(N)
 * 稳定
 * 非原地算法（out-place）
 */
export function mergeSort(arr = []) {
  const array = Array.from(arr);
  const length = array.length;
  let half = 0;
  if(length < 2) {
    return array;
  }
  if(length === 2) {
    return array[0] > array[1] ? [array[1], array[0]] : [array[0], array[1]];
  }

  // Array.prototype.slice, 会自动丢弃小数位
  half = length / 2;
  return merge( mergeSort(array.slice(0, half)), mergeSort(array.slice(half)) );
}

function merge(a = [], b = []) {
  const merged = [];
  for(let ai = 0, bi = 0, aLen = a.length, bLen = b.length; ai < aLen || bi < bLen;) {
    const aIndex = a[ai];
    const bIndex = b[bi];

    if(aIndex > bIndex || ai >= aLen) {
      merged.push(bIndex);
      bi += 1;
    } else {
      merged.push(aIndex);
      ai += 1;
    }
  }
  return merged;
}
