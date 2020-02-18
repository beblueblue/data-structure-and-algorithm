/**
 * 希尔排序
 * 时间复杂度：O(N*logN)
 * 空间复杂度：O(1)
 * 不稳定：分组排序有可能破坏稳定性
 * 原地算法
 * @param { Array } arr 
 */
export function shellSort(arr = []) {
  const array = Array.from(arr);
  const length = array.length;

  if(length < 2) {
    return array;
  }
  // 分组
  for(let gap = Math.floor(length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // 直接插入排序
    insertI(array, gap)
  }
  return array;
}

function insertI(arr, gap) {
  const length = arr.length;
  for(let right = gap; right < length; right++) {
    // 缓存末位置的值
    const temp = arr[right];
    let left = right;
    for(; left > 0 && arr[left - gap] > temp; left -= gap) {
      // 大值右移
      arr[left] = arr[left - gap];
    }
    // 将缓存值插入中间位置
    arr[left] = temp;
  }
}