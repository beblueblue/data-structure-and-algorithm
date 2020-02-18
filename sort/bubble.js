import swap from './sort-common';

/**
 * 冒泡排序
 * 时间复杂度： O(N^2)
 * 空间复杂度： O(1)
 * 稳定
 * 原地排序（in-place）
 * @param {Array} arr 
 */
export function bubbleSort(arr = []) {
  const array = Array.from(arr);
  const length = array.length;

  // 从左向右扫描，将大值冒泡到右侧
  for(let right = 1; right < length; right++) {
    let noSwapped = true;

    for(let left = 0; left < length - right; left++) {
      // 大值右移
      if(array[left] > array[left + 1]) {
        swap(array, left, left + 1);
        noSwapped = false;
      }
    }

    // 如果一次交换都没有发生，说明arr已经是有序数组，退出
    if(noSwapped) {
      break;
    }
  }
  return array;
}